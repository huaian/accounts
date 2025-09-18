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
var expenseTypesDictData = require('./expenseTypes');
var incomeTypesDictData = require('./incomeTypes');
var url = 'mongodb://127.0.0.1:27017';
var dbName = 'accounts';


async function install () {
// MongoClient.connect(url, function(err, client) {
var MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(url);
try {
  await client.connect();
  console.log('Connected successfully to server');
  
  var db = client.db(dbName);

  // Fetch a collection to insert document into
  var collection = db.collection("dict_" + 'expense_types');//查询消费字典表
  await collection.deleteMany();
  console.log('Deleted existing expense types');
  
  const expenseResult = await collection.insertMany(expenseTypesDictData.expenseTypes,{w:1});
  console.log(`Inserted ${expenseResult.insertedCount} expense types`);
  
  var collection2 = db.collection("dict_" + 'income_types');//查询收入字典表
  await collection2.deleteMany();
  console.log('Deleted existing income types');
  
  const incomeResult = await collection2.insertMany(incomeTypesDictData.incomeTypes,{w:1});
  console.log(`Inserted ${incomeResult.insertedCount} income types`);
  
  // 添加测试代码来验证数据是否插入成功
  const expenseCount = await collection.countDocuments();
  const incomeCount = await collection2.countDocuments();
  
  console.log(`Verification - Expense types in DB: ${expenseCount}`);
  console.log(`Verification - Income types in DB: ${incomeCount}`);
  
  if (expenseCount > 0) {
    const sampleExpense = await collection.findOne();
    console.log('Sample expense type:', sampleExpense);
  }
  
  if (incomeCount > 0) {
    const sampleIncome = await collection2.findOne();
    console.log('Sample income type:', sampleIncome);
  }
  
  await client.close();//关闭数据库链接
  console.log('Database connection closed');
} catch(err) {
  console.error('Error during database operations:', err);
  await client.close();
}

// });


}
install()