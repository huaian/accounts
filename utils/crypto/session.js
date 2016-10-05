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
var generateSsoToken = function(){
  var $timestamp = Date.now();
  var $randomStr = crypto.randomBytes(16).toString('hex');
  var $url = req.body.url;
  var ssoToken = sha1($url + $timestamp + $randomStr);
};
//注册
module.exports.generateSsoToken = generateSsoToken;
