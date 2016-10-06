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
var mongoConnect = require('../../../utils/mongoConnect');
//dict data
//var db = new Db('accounts', new Server('localhost', 27017));
var url = 'mongodb://localhost:27017/accounts';
router.get('/:dictCode',function(req, res, next){
  if (!req.user || !req.user.userName) {
    next(new Error("Permission denied."));
    return;
  }
  var dictCode = req.params.dictCode;
  var userName = req.user.userName;
  //db.open(function(err, db) {
    mongoConnect.then(function(db) {
      console.log(db);
    // Fetch a collection to insert document into
    var collection = db.collection(dictCode);//查询用户表
    collection.find({}).toArray(function(err, items) {
      if(_.isArray(items)){//
        res.json(
          {
            "responseStatus":{
              "code":"000000",//状态码，"000000"成功,其他为失败 4000004
              "msg":"查询成功",//描述
            },
            body:items
          }
        );
      }else{
        res.json(
          {
            "responseStatus":{
              "code":"000005",//状态码，"000000"成功,其他为失败 4000004
              "msg":"系统错误",//描述
            },
            body:null
          }
        );
      }
      //db.close();
    });
  });
});

module.exports = router;
