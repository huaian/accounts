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
var db = new Db('accounts', new Server('localhost', 27017));
var expenseTypes = [
  {name:'服装',id:'clothes'},
  {name:'饮食',id:'foods'},
  {name:'护肤化妆品',id:'skinCare'},
  {name:'日用',id:'daily'},
  {name:'交际',id:'social'},
  {name:'交通',id:'traffic'},
  {name:'赡养',id:'alimony'},
  {name:'医疗',id:'medical'}
];
module.exports.expenseTypes = expenseTypes;
