//启动
Run steps:
0. cd accounts
1. npm install//install node modules
2. npm start//start nodejs server command
or
3.  $ [sudo] npm install forever -g
forever start ./bin/www
forever stop ./bin/www

文件定义:
app.js define routes

安装nodejs链接mongodb的driver(在express没有mongodb的情况下):
1.npm install mongodb --save
2.npm install bson --save
3.Error: collection name must be a String

//Data level
创建mogodb:
0. cd ~/mongodb-osx-x86_64-3.2.4
1. cd bin
2. mkdir -p data/db
3. mkdir log/
4. touch dbName

启动mongodb:
4. ./mongod --dbpath=../data/db/ --logpath ../log/dbName --fork
测试启动是否正常:
5. ./mongo
6. use dbName
7. db.users.save({name:'121212',password:123456})
8. 27017
9. db.users.find()
