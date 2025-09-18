var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var dbName = 'accounts';

var express = require('express');
var router = express.Router();
var os = require('os');
var _ = require('underscore');
var sha1 = require('sha1');//加密 生成jsapi调用签名
//app js

var crypto = require('crypto');
var mongoConnect = require('./mongoConnect');
var dictCache = {};
//获得
async function getDictData(dictCode){
  // return mongoConnect.then(function(db) {
    const client = await new MongoClient(url);
  try {
    console.log('Connected successfully to server');
    await client.connect();
  } catch (e) {
    console.error(e);
  }
  var db = client.db(dbName);
  var collection = db.collection("dict_" + dictCode);//查询收入字典表
  return await collection.find().toArray();
  // });
}
module.exports.getDictData = getDictData;

// Replace the old Db and Server constructor usage with modern MongoClient approach
MongoClient.connect(url, function(err, client) {
    if (err) {
        console.error('Failed to connect to MongoDB:', err);
        return;
    }
    var db = client.db(dbName);
    
    // ... existing code that uses db ...
    
    // Don't forget to close the client when done
    // client.close();
});
