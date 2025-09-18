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

var expenseTypes = [
  {name:'水电煤',id:'utilities'},
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

// Insert expenseTypes data into MongoDB using modern MongoClient approach
MongoClient.connect(url, function(err, client) {
    if (err) {
        console.error('Failed to connect to MongoDB:', err);
        return;
    }
    var db = client.db(dbName);
    
    var collection = db.collection('dict_expenseTypes');
    expenseTypes.forEach(function(type) {
        collection.updateOne(
            { id: type.id },
            { $set: type },
            { upsert: true }
        );
    });
    
    // Close the client when done
    client.close();
});