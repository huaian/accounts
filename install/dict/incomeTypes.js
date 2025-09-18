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
//BSON = require('mongodb').pure().BSON,
assert = require('assert');
var crypto = require('crypto');
var url = 'mongodb://localhost:27017';
var dbName = 'accounts';

var incomeTypes = [
  {name:'工资',id:'salary'},
  {name:'兼职',id:'partTime'},
  {name:'理财',id:'financial'},
  {name:'礼金',id:'gifts'},
  {name:'其他',id:'other'}
];
module.exports.incomeTypes = incomeTypes;

// Insert incomeTypes data into MongoDB using modern MongoClient approach
MongoClient.connect(url, function(err, client) {
    if (err) {
        console.error('Failed to connect to MongoDB:', err);
        return;
    }
    var db = client.db(dbName);
    
    var collection = db.collection('dict_incomeTypes');
    incomeTypes.forEach(function(type) {
        collection.updateOne(
            { id: type.id },
            { $set: type },
            { upsert: true }
        );
    });
    
    // Close the client when done
    client.close();
});