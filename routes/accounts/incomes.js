/**
@description 收入
*/
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
  ObjectID = require('mongodb').ObjectId, // 修改: 使用 ObjectId 而不是 ObjectID
  Binary = require('mongodb').Binary,
  GridStore = require('mongodb').GridStore,
  Grid = require('mongodb').Grid,
  Code = require('mongodb').Code,
  //BSON = require('mongodb').pure().BSON,
  assert = require('assert');
var crypto = require('crypto');
//dict data
//var db = new Db('accounts', new Server('localhost', 27017));
var url = 'mongodb://localhost:27017/accounts';
var mongoConnect = require('../../utils/mongoConnect');
const dbName = 'accounts';
//ADD
router.post('/', async function (req, res, next) {
  if (!req.user || !req.user.userName) {
    next(new Error("Permission denied."));
    return;
  }
  console.log(req.body);
  console.log(req.user.userName);
  const client = await new MongoClient(url);
  try {
    console.log('Connected successfully to server');
    await client.connect();
  } catch (e) {
    console.error(e);
  }
  var db = client.db(dbName);
  // MongoClient.connect(url, function(err, db) {
  //db.open(function(err, db) {
  var collection = db.collection('incomes');//incomes
  var incomeItem = _.pick(req.body, 'amount', 'date', 'remark', 'type');
  incomeItem.date = new Date(incomeItem.date);
  //incomeItem.amount = parseInt(incomeItem.amount,10);
  incomeItem.amount = +parseFloat(incomeItem.amount, 10).toFixed(2);
  await collection.insertOne(_.extend({ userName: req.user.userName }, incomeItem))
  // function (err, items) {
    db.close();
    res.json(
      {
        "responseStatus": {
          "code": "000000",//状态码，"000000"成功,其他为失败 4000004
          "msg": "保存成功！",//描述
        },
        body: {
          incomeItem
        }
      }
    );
  // });
  //});
  // });
});

/* GET users listing. */
router.get('/:incomeId', async function (req, res, next) {
  if (!req.user || !req.user.userName) {
    next(new Error("Permission denied."));
    return;
  }
  var incomeId = req.params.incomeId;
    const client = await new MongoClient(url);
  try {
    console.log('Connected successfully to server');
    await client.connect();
  } catch (e) {
    console.error(e);
  }
  var db = client.db(dbName);
  //console.log(req.params.incomeId);
  //console.log(req.user.userName);
  //console.log({userName:req.user.userName,_id:new ObjectID(incomeId)});
  //db.open(function(err, db) {
  //MongoClient.connect(url, function(err, db) {
  // mongoConnect.then(function (db) {
    var collection = db.collection('incomes');//incomes
    const item = await collection.findOne({ userName: req.user.userName, _id: new ObjectID(incomeId) })
    // .then(function (item) {
      console.log(item);
      res.json(
        {
          "responseStatus": {
            "code": "000000",//状态码，"000000"成功,其他为失败 4000004
            "msg": "查询成功！",//描述
          },
          body: item
        }
      );
      //db.close();
    // });
  // });
});

//get list
router.get('/', async function (req, res, next) {
  if (!req.user || !req.user.userName) {
    next(new Error("Permission denied."));
    return;
  }
  console.log(req.body);
  console.log(req.user.userName);
  //db.open(function(err, db) {
  // MongoClient.connect(url, function (err, db) {
  const client = await new MongoClient(url);
  try {
    console.log('Connected successfully to server');
    await client.connect();
  } catch (e) {
    console.error(e);
  }
  var db = client.db(dbName);
    var collection =  db.collection('incomes');//incomes
    const items = await collection.find({ userName: req.user.userName }).sort({ 'date': -1 }).toArray()
    // (async function (err, items) {
      console.log(items);
      var collection = db.collection("dict_" + 'income_types');//查询收入字典表
      const dictItems = await collection.find().toArray() 
      // (function (err, dictItems) {
        console.log(dictItems);
        //var collection = db.collection("dict_" + 'income_types');//查询收入字典表
        _.each(items, function (item) {
          item.typeDesc = (_.findWhere(dictItems, { id: item.type }) || {}).name;//set desc attribute
        });
        res.json(
          {
            "responseStatus": {
              "code": "000000",//状态码，"000000"成功,其他为失败 4000004
              "msg": "查询成功！",//描述
            },
            body: {
              content: items,
              totalElements: items.length
            }
          }
        );
        // client.close();
      // });
    // });
  // });
});

//DELETE
router.delete('/:incomeId', async function (req, res, next) {
  console.log(req.params.incomeId);
  var incomeId = req.params.incomeId;
  if (!req.user || !req.user.userName) {
    next(new Error("Permission denied."));
    return;
  }
  var db = client.db(dbName);
  //db.open(function(err, db) {
  // MongoClient.connect(url, function (err, db) {
    var collection = db.collection('incomes');//incomes
    await collection.deleteOne({ userName: req.user.userName, _id: new ObjectID(incomeId) }).then(function (err, items) {
      res.json(
        {
          "responseStatus": {
            "code": "000000",//状态码，"000000"成功,其他为失败 4000004
            "msg": "删除成功！",//描述
          },
          body: items
        }
      );
      db.close();
    });
  // });
});


/* PUT users listing. */
router.put('/:incomeId', async function (req, res, next) {
  console.log(req.params.incomeId);
  var incomeId = req.params.incomeId;
  if (req.params.incomeId) {
    //console.log({userName:req.user.userName,_id:new ObjectID(incomeId)});
    //db.open(function(err, db) {
    // MongoClient.connect(url, function (err, db) {
  const client = await new MongoClient(url);
  try {
    console.log('Connected successfully to server');
    await client.connect();
  } catch (e) {
    console.error(e);
  }
  var db = client.db(dbName);
      var collection = db.collection('incomes');//incomes
      var incomeItem = _.pick(req.body, 'amount', 'date', 'remark', 'type');
      incomeItem.date = new Date(incomeItem.date);
      //incomeItem.amount = parseInt(incomeItem.amount,10);
      incomeItem.amount = +parseFloat(incomeItem.amount, 10).toFixed(2);
      collection.findOneAndUpdate({ userName: req.user.userName, _id: new ObjectID(incomeId) }, { $set: incomeItem }).then(function (item) {
        console.log(item);
        res.json(
          {
            "responseStatus": {
              "code": "000000",//状态码，"000000"成功,其他为失败 4000004
              "msg": "保存成功！",//描述
            },
            body: item
          }
        );
        client.close();
      });
    // });
    //
  } else {
  }
});

module.exports = router;
