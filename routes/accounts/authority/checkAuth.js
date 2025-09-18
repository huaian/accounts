var express = require('express');
var router = express.Router();
var os = require('os');
var _ = require('underscore');
var sha1 = require('sha1');
//app js
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var Binary = require('mongodb').Binary;
var GridStore = require('mongodb').GridStore;
var Grid = require('mongodb').Grid;
var Code = require('mongodb').Code;
var assert = require('assert');
var url = 'mongodb://localhost:27017';
var dbName = 'accounts';
var mongoConnect = require('../../../utils/mongoConnect');
//注册
router.all('*', async function(req, res, next){
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
  // MongoClient.connect(url, function(err, client) {
  const client = await new MongoClient(url);
  try {
    console.log('Connected successfully to server');
    await client.connect();
  } catch (e) {
    console.error(e);
  }
   
    var db = client.db(dbName);
    // Fetch a collection to insert document into
    var collection = db.collection("sessions");//查询用户表
    var item = await collection.findOne({"ssoToken":ssoToken});
    // , function(err, item) {
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
    // });
  // });
});

module.exports = router;
