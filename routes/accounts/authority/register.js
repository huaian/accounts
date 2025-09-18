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
var passwordCrypo = require('../../../utils/crypto/password');
var url = 'mongodb://localhost:27017';
var dbName = 'accounts';
//注册
router.post('/',async function(req, res, next){
  var userName = req.body.loginId;
  var password = req.body.password;
  // MongoClient.connect(url, function(err, client) {
  const client = await new MongoClient(url, {useNewUrlParser: true});
  await client.connect();
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
    const item = await collection.findOne ({"userName":userName});
    // ({"userName":userName}, function(err, item) {
      console.log('item:', item);
      console.log(item);//
      if(_.isObject(item)){//
        client.close();
        res.json(
          {
            "responseStatus":{
              "code":"000001",//状态码，"000000"成功,其他为失败 4000004
              "msg":"已经存在用户名！",//描述
            },
            body: {
            }
          }
        );
      }else{
        await collection.insertOne(
          {
            userName : userName,
            password :passwordCrypo.hashPassword(password)
          },function(){
          }
        );//更新用户表
        res.json(
              {
                "responseStatus":{
                  "code":"000000",//状态码，"000000"成功,其他为失败 4000004
                  "msg":"注册成功！",//描述
                },
                body: {
                  userName
                }
              }
            );
      }
    // });
  // });
});

module.exports = router;
