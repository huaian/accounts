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
var mongoConnect = require('../../utils/mongoConnect');
var dictUtil = require('../../utils/dict');//
var http = require('http');
var URL = require('url');
/*
http.createServer(function(req, res){
var arg = url.parse(req.url).query;  //方法一arg => aa=001&bb=002
var arg = url.parse(req.url, true).query;  //方法二arg => { aa: '001', bb: '002' }
console.log(arg.aa);//返回001
console.log(arg.bb);//返回002
*/
//ADD
router.get('/', function (req, res, next) {
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
  console.log(startDate, endDate, arg);
  var statistics = {};
  var current;
  //var nextMonth;
  //var currentMonth;
  if(!(startDate && _.isString(startDate)) || !(endDate && _.isString(endDate))){
    current = new Date();//当前日期
    if(!(startDate && _.isString(startDate))){
      startDate = new Date(current.getFullYear(), current.getMonth());//当前月开始时间
    }
    if( !(endDate && _.isString(endDate))){
      endDate = new Date(current.getFullYear(), current.getMonth() + 1);//下个月的时间开始
    }
  }
  mongoConnect.then(function (db) {//request
    var collection = db.collection('incomes');//incomes
    console.log('collection');
    var incomesCursor = collection.aggregate(
      [
        {
          $project: {
            date: 1,
            amount: 1,
            userName: 1,
            type: 1
          }
        },
        {
          $match: {
            userName: req.user.userName,
            date: {
              //'$gte': (startDate && _.isString(startDate)) ? new Date(startDate) : currentMonth,//start time
              //'$lte': (endDate && _.isString(endDate)) ? new Date(endDate) : nextMonth//时间截止
              '$gte': new Date(startDate),//start time
              '$lte':new Date(endDate)//时间截止
            }
          }
        },
        {
          $group: {
            _id: "$type",
            y: { $sum: "$amount" },
          }
        },
        {
          $project: {
            type: "$_id",
            y: "$y",
            text: "$_id",
            tooltip: "$y"
          }
        }
      ]
    );
    incomesCursor.toArray().then(function (items) {//incomes
      console.log(items);
      statistics.incomes = items;
      console.log('incomes:',statistics.incomes);
      var collection = db.collection('expenses');//expenses
      /**
      {
        y: 1.48,
        text: "Russian",
        tooltip: "148 million"
      }
      */
      var expensesCursor = collection.aggregate(//聚合数据
        [
          {
            $project: {
              date: 1,
              amount: 1,
              userName: 1,
              type: 1
            }
          },
          {
            $match: {
              userName: req.user.userName,
              date: {
                /*
                '$gte': _.isString(startDate) ? new Date(startDate) : currentMonth,//from date
                '$lte': _.isString(endDate) ? new Date(endDate) : nextMonth,//end date
                */
                '$gte': new Date(startDate),//start time
                '$lte': new Date(endDate)//时间截止
              }
            }
          },
          {
            $group:
            {
              _id: "$type",
              y: {
                $sum: "$amount"
              }
            }
          },
          {
            $project: {
              type: "$_id",
              y: "$y",
              text: "$_id",
              tooltip: "$y"
            }
          },
        ]
      );
      return expensesCursor.toArray();//get the 
    }).then(
      function (items) {//expenses
        statistics.expenses = items;
        console.log('expeneses:',statistics.expenses);
        ///*
        dictUtil.getDictData('income_types').then(function (dictItems) {//get income dict data list
          _.each(statistics.incomes, function (item) {
            item.tooltip = item.tooltip.toFixed(2);
            item.text = (_.findWhere(dictItems, { id: item.type }) || {}).name;//set desc attribute before send to front-end
          });
          dictUtil.getDictData('expense_types').then(function (dictItems) {
            _.each(statistics.expenses, function (item) {
              item.tooltip = item.tooltip.toFixed(2);
              item.text = (_.findWhere(dictItems, { id: item.type }) || {}).name;//set desc attribute before sent to front-end
            });
            res.json(//send back success search response
              {
                "responseStatus": {
                  "code": "000000",//状态码，"000000"成功,其他为失败 4000004
                  "msg": "查询成功！",//描述
                },
                body: statistics
              }
            );
          });
        });
        //*/
      });
  });
});

module.exports = router;
