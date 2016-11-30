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
var passwordCrypo = require('../../../utils/crypto/password');
var db = new Db('accounts', new Server('localhost', 27017));
/*
router.delete('/:caseId',function(req, res, next){
  res.json(
    {
      "responseStatus":{
        "code":"000000",//状态码，"000000"成功,其他为失败 4000004
        "msg":"",//描述
      },
      body: {
      }
    }
  );
});
*/
router.post('/',function(req, res, next){
  var userName = req.body.loginId;
  //console.log(req.body.photo);
  db.open(function(err, db) {
    // Fetch a collection to insert document into
    var collection = db.collection("users");//查询用户表
    /*
    collection.insertOne(
      {
        userName : userName,
        password : req.body.photo
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
    */
    collection.findOne({"userName":userName}, function(err, item) {
      console.log(item);//
      if(_.isObject(item) && (item.password == passwordCrypo.hashPassword(req.body.password))){//
        var $timestamp = Date.now();
        var $randomStr = crypto.randomBytes(16).toString('hex');
        var $url = req.body.url;
        var ssoToken = sha1($url + $timestamp + $randomStr);
        var sessionCollection = db.collection('sessions');//获得session表单
        sessionCollection.findOneAndUpdate({ "userName" : userName},
        { $set: {
          userName:userName,
          "ssoToken" : ssoToken
        }
        },
        { upsert:true}
      );//更新session表
        res.json(
          {
            "responseStatus":{
              "code":"000000",//状态码，"000000"成功,其他为失败 4000004
              "msg":"登录成功",//描述
            },
            body: {
              userInfo:{
                ssoToken:ssoToken
              }
            }
          }
        );
      }else{
        res.json(
          {
            "responseStatus":{
              "code":"000004",//状态码，"000000"成功,其他为失败 4000004
              "msg":"用户名或密码错误",//描述
            },
            body: {
            }
          }
        );
      }
      db.close();
    });
  });
});

module.exports = router;
