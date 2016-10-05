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
var expenseTypesDictData = require('./expenseTypes');
var incomeTypesDictData = require('./incomeTypes');
var db = new Db('accounts', new Server('localhost', 27017));

db.open(function(err, db) {
  // Fetch a collection to insert document into
  var collection = db.collection("dict_" + 'expense_types');//查询消费字典表
  collection.remove();//清空之前的列表
  collection.insertMany(expenseTypesDictData.expenseTypes,{w:1}).then(function(){//promise interface
    var collection = db.collection("dict_" + 'income_types');//查询收入字典表
    collection.remove();//清空之前的列表
    collection.insertMany(incomeTypesDictData.incomeTypes,{w:1});
  }).then(function(){
    db.close();//关闭数据库链接
  });
});
