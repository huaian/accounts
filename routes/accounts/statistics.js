/**
@description
统计:
db.incomes.aggregate([{$match:{remark:"2323"}},{$group:{_id:"$userName",total:{$sum:"$amount"}}}])
*/
var express = require('express');
var router = express.Router();
var os = require('os');
var _ = require('underscore');
var sha1 = require('sha1');//加密 生成jsapi调用签名
//app js
var Db = require('mongodb').Db,
MongoClient = require('mongodb').MongoClient,
Server = require('mongodb').Server,
ReplSetServers = require('mongodb').ReplSetServers,
ObjectID = require('mongodb').ObjectID,
Binary = require('mongodb').Binary,
GridStore = require('mongodb').GridStore,
Grid = require('mongodb').Grid,
Code = require('mongodb').Code,
//BSON = require('mongodb').pure().BSON,
assert = require('assert');
var crypto = require('crypto');
var ObjectID = require('mongodb').ObjectID;
//dict data
var mongoConnect = require('./mongoConnect');
var http = require('http');
var URL = require('url');
/*
http.createServer(function(req, res){
var arg = url.parse(req.url).query;  //方法一arg => aa=001&bb=002
var arg = url.parse(req.url, true).query;  //方法二arg => { aa: '001', bb: '002' }
console.log(arg.aa);//返回001
console.log(arg.bb);//返回002
*/
var current = new Date();
var currentMonth = new Date(current.getFullYear(),current.getMonth());//当前月开始时间
var nextMonth = new Date(current.getFullYear(),current.getMonth() + 1);//下个月的时间开始
//ADD
router.get('/',function(req, res, next){
  //check auth
  if (!req.user || !req.user.userName) {
    next(new Error("Permission denied."));
    return;
  }
  //
  console.log(req.user.userName);
  var arg = URL.parse(req.url, true).query;
  /*
  var startDate = req.body.startDate;
  var endDate = req.body.endDate;
  */
  var startDate = arg.startDate;
  var endDate = arg.endDate;
  console.log(startDate,endDate,arg);
  var statistics = {};
  mongoConnect.then(function(db) {
    var collection = db.collection('incomes');//incomes
    console.log('collection');
    var incomesCursor = collection.aggregate(
      [
        {$match:{
          userName:req.user.userName,
          date:{
            '$gt':_.isString(startDate)?new Date(startDate):currentMonth,
            '$lt':_.isString(endDate)?new Date(endDate):nextMonth
          }
        }
      },
      {$group:{
        _id:"$type",
        total:{$sum:"$amount"}
      }
    }
  ]
);
incomesCursor.toArray().then(function(items){
    console.log(items);
    statistics.incomes = items;
    console.log(statistics.incomes);
    var collection = db.collection('expenses');//expenses
    var expensesCursor = collection.aggregate(
      [
        {$match:{
          userName:req.user.userName,
          date:{
            '$gt':_.isString(startDate)?new Date(startDate):currentMonth,
            '$lt':_.isString(endDate)?new Date(endDate):nextMonth
          }
        }
      },
      {$group:{
        _id:"$type",total:{$sum:"$amount"}}
      }
    ]
  );
  return expensesCursor.toArray();
}).then(
  function(items) {
    statistics.expenses = items;
    res.json(
      {
        "responseStatus":{
          "code":"000000",//状态码，"000000"成功,其他为失败 4000004
          "msg":"查询成功！",//描述
        },
        body:statistics
      }
    );
  });
});
});

module.exports = router;
