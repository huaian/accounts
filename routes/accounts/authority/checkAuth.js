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
var db = new Db('accounts', new Server('localhost', 27017));
var mongoConnect = require('../../../utils/mongoConnect');
//注册
router.all('*',function(req, res, next){
  console.log(req.method);
  if(req.method == 'OPTIONS'){
    next();
    return true;
  }
  console.log(req.headers);
  var ssoToken = req.headers['x-sso-token'] || '';
  console.log(ssoToken);
  /*
  if(!ssoToken){
    return false;
  }
  */
  //db.open(function(err, db) {
  mongoConnect.then(function(db){
    // Fetch a collection to insert document into
    var collection = db.collection("sessions");//查询用户表
    collection.findOne({"ssoToken":ssoToken}, function(err, item) {
      console.log(item);//
      if(_.isObject(item)){//
        req.user = {
          userName:item.userName//设置用户名
        };
        next();
      }else{
        res.json(
          {
            "responseStatus":{
              "code":"400004",//状态码，"000000"成功,其他为失败 4000004
              "msg":"当前用户未登录，请重新登录",//描述
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
