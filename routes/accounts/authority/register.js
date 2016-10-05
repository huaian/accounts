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
var passwordCrypo = require('../../../utils/crypto/password');
//注册
router.post('/',function(req, res, next){
  var userName = req.body.loginId;
  var password = req.body.password;
  db.open(function(err, db) {
    // Fetch a collection to insert document into
    var collection = db.collection("users");//查询用户表
    collection.findOne({"userName":userName}, function(err, item) {
      console.log(item);//
      if(_.isObject(item)){//
        res.json(
          {
            "responseStatus":{
              "code":"000001",//状态码，"000000"成功,其他为失败 4000004
              "msg":"用户已注册",//描述
            },
            body:null

          }
        );
      }else{
        collection.insertOne(
          {
            userName : userName,
            password :passwordCrypo.hashPassword(password)
          },function(){
            res.json(
              {
                "responseStatus":{
                  "code":"000000",//状态码，"000000"成功,其他为失败 4000004
                  "msg":"注册成功！",//描述
                },
                body: {
                }
              }
            );
          }
        );//更新用户表
      }
      db.close();
    });
  });
});

module.exports = router;
