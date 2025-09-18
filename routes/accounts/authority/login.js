var express = require('express');
var router = express.Router();
var os = require('os');
var _ = require('underscore');
var sha1 = require('sha1');//加密 生成jsapi调用签名
//app js
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var Binary = require('mongodb').Binary;
var GridStore = require('mongodb').GridStore;
var Grid = require('mongodb').Grid;
var Code = require('mongodb').Code;
var assert = require('assert');
var crypto = require('crypto');
var passwordCrypo = require('../../../utils/crypto/password');
var url = 'mongodb://localhost:27017';
var dbName = 'accounts';
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
router.post('/',async function(req, res, next){
  var userName = req.body.loginId;
  const client = await new MongoClient(url);
  try {
    console.log('Connected successfully to server');
    await client.connect();
  } catch (e) {
    console.error(e);
  }
  // const db = client.db(dbName);
  //console.log(req.body.photo);
  // MongoClient.connect(url, function(err, client) {
    console.log('connected to mongodb')
    // if (err) {
    //   console.error('Failed to connect to MongoDB:', err);
    //   res.json({
    //     "responseStatus":{
    //       "code":"999999",
    //       "msg":"数据库连接失败",
    //     },
    //     body: {}
    //   });
    //   return;
    // }
    var db = client.db(dbName);
    // Fetch a collection to insert document into
    var collection = db.collection("users");//查询用户表
    console.log(collection);
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
    // 修改: 使用 Promise 方式处理 findOne 查询
    try {
      const item = await collection.findOne({"userName":userName});
      console.log(item);//
      if(_.isObject(item) && (item.password == passwordCrypo.hashPassword(req.body.password))){//  
        var $timestamp = Date.now();
        var $randomStr = crypto.randomBytes(16).toString('hex');
        var $url = req.body.url;
        var ssoToken = sha1($url + $timestamp + $randomStr);
        var sessionCollection = db.collection('sessions');//获得session表单
        await sessionCollection.findOneAndUpdate({ "userName" : userName},
        { $set: {
          userName:userName,
          "ssoToken" : ssoToken
        }
        },
        { upsert:true}
      );//更新session表
        res.json({
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
        console.log('登录失败');
        res.json({
            "responseStatus":{
              "code":"000004",//状态码，"000000"成功,其他为失败 4000004
              "msg":"用户名或密码错误",//描述
            },
            body: {
            }
          }
        );
      }
    } catch (err) {
      console.error('Database query error:', err);
      res.json({
        "responseStatus":{
          "code":"999999",
          "msg":"数据库查询失败",
        },
        body: {}
      });
    } finally {
      client.close();
    }
  // });
});

module.exports = router;