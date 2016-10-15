/**
@description 支出
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
//var db = new Db('accounts', new Server('localhost', 27017));
var url = 'mongodb://localhost:27017/accounts';
var mongoConnect = require('../../utils/mongoConnect');
//ADD
router.post('/',function(req, res, next){
  if (!req.user || !req.user.userName) {
    next(new Error("Permission denied."));
    return;
  }
  console.log(req.body);
  console.log(req.user.userName);
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('expenses');//expenses
    var expenseItem = _.pick(req.body,'amount','date','remark','type');
    expenseItem.date = new Date(expenseItem.date);
    //expenseItem.amount = parseInt(expenseItem.amount,10);
    expenseItem.amount = +(parseFloat(expenseItem.amount,10).toFixed(2));
    collection.insertOne(_.extend({userName:req.user.userName},expenseItem),function(err, items) {
      db.close();
      res.json(
        {
          "responseStatus":{
            "code":"000000",//状态码，"000000"成功,其他为失败 4000004
            "msg":"保存成功！",//描述
          },
          body: {
          }
        }
      );
    });
    //});
  });
});

/* GET users listing. */
router.get('/:expenseId', function(req, res, next) {
  if (!req.user || !req.user.userName) {
    next(new Error("Permission denied."));
    return;
  }
  var expenseId = req.params.expenseId;
  //console.log(req.params.expenseId);
  //console.log(req.user.userName);
  //console.log({userName:req.user.userName,_id:new ObjectID(expenseId)});
  //db.open(function(err, db) {
  //MongoClient.connect(url, function(err, db) {
  mongoConnect.then(function(db) {
    var collection = db.collection('expenses');//expenses
    collection.findOne({userName:req.user.userName,_id:new ObjectID(expenseId)}).then(function(item){
      console.log(item);
      res.json(
        {
          "responseStatus":{
            "code":"000000",//状态码，"000000"成功,其他为失败 4000004
            "msg":"查询成功！",//描述
          },
          body: item
        }
      );
      //db.close();
    });
  });
});

//get list
router.get('/',function(req, res, next){
  if (!req.user || !req.user.userName) {
    next(new Error("Permission denied."));
    return;
  }
  console.log(req.body);
  console.log(req.user.userName);
  //db.open(function(err, db) {
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('expenses');//expenses
    collection.find({userName:req.user.userName}).sort({'date':-1}).toArray(function(err,items){
      console.log(items);
      var collection = db.collection("dict_" + 'expense_types');//查询收入字典表
      collection.find().toArray(function(err,dictItems){
        console.log(dictItems);
        var collection = db.collection("dict_" + 'expense_types');//查询收入字典表
        _.each(items,function(item){
          item.typeDesc = (_.findWhere(dictItems,{id:item.type}) || {}).name;//set desc attribute
        });
        res.json(
          {
            "responseStatus":{
              "code":"000000",//状态码，"000000"成功,其他为失败 4000004
              "msg":"查询成功！",//描述
            },
            body: items
          }
        );
        db.close();
      });
    });
  });
});

//DELETE
router.delete('/:expenseId',function(req, res, next){
  console.log(req.params.expenseId);
  var expenseId = req.params.expenseId;
  if (!req.user || !req.user.userName) {
    next(new Error("Permission denied."));
    return;
  }
  //db.open(function(err, db) {
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('expenses');//expenses
    collection.deleteOne({userName:req.user.userName,_id:new ObjectID(expenseId)}).then(function(err,items){
      res.json(
        {
          "responseStatus":{
            "code":"000000",//状态码，"000000"成功,其他为失败 4000004
            "msg":"删除成功！",//描述
          },
          body: items
        }
      );
      db.close();
    });
  });
});

/* PUT users listing. */
router.put('/:expenseId', function(req, res, next) {
  console.log(req.params.expenseId);
  var expenseId = req.params.expenseId;
  if(req.params.expenseId){
    //console.log({userName:req.user.userName,_id:new ObjectID(expenseId)});
    //db.open(function(err, db) {
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('expenses');//expenses
      var expenseItem = _.pick(req.body,'amount','date','remark','type');
      expenseItem.date = new Date(expenseItem.date);
      //expenseItem.amount = parseInt(expenseItem.amount,10);
      expenseItem.amount = +(parseFloat(expenseItem.amount,10).toFixed(2));
      collection.findOneAndUpdate({userName:req.user.userName,_id:new ObjectID(expenseId)},{$set:expenseItem}).then(function(item){
        console.log(item);
        res.json(
          {
            "responseStatus":{
              "code":"000000",//状态码，"000000"成功,其他为失败 4000004
              "msg":"保存成功！",//描述
            },
            body: item
          }
        );
        db.close();
      });
    });
    //
  }else{
  }});

  module.exports = router;
