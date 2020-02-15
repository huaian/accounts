#开发

#启动
Run steps:
0. cd accounts
1. npm install //install node modules
2. npm start //start nodejs server command

or
3.  $ [sudo] npm install forever -g
forever start ./bin/www
forever stop ./bin/www

文件定义:
app.js define routes

安装nodejs链接mongodb的driver(在express没有mongodb的情况下):
1.npm install mongodb --save
2.npm install bson --save

//Data level
创建mogodb:
0. cd ~/mongodb-osx-x86_64-3.2.4
1. cd bin
2. mkdir -p data/db
3. mkdir log/
4. touch dbName


启动mongodb(本地):
4. ./mongod --dbpath=../data/db/ --logpath ../log/dbName --fork

测试启动是否正常:
5. ./mongo
6. use dbName
7. db.users.save({name:'121212',password:123456})
8. 27017
9. db.users.find()
//
show collections 查看所有集合

set cookie: 
https://www.cnblogs.com/lgphp/p/3913077.html
https://blog.csdn.net/luo200618/article/details/72789759
https://blog.csdn.net/pretent/article/details/45204909


# production 
root@instance-tbbjrcnc:/# touch ?/var/run/mongodb/mongod.pid
root@instance-tbbjrcnc:/# chown -R mongodb:mongodb /var/run/mongodb/mongod.pid
即可启动成功。

1.找到mongod.lock文件，并删除mongod.lock

 

2.以修复方式启动mongodb

/usr/bin/mongod -f /etc/mongod.conf --repair


rm -rf /var/lib/mongo/mongod.lock


songrenqingdeMacBook-Pro:bin songrenqing$ lsof -i :27017
COMMAND   PID        USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
mongod  61316 songrenqing   11u  IPv4 0xacda8b230bc07883      0t0  TCP localhost:27017 (LISTEN)
songrenqingdeMacBook-Pro:bin songrenqing$ kill -9 61316
或者使用其它的进程ID，之前是27017，现在指定27018，就不会发生冲突
————————————————

restart nodejs app

pm2 restar www

# mention that last repair 
should --repair start again


/usr/local/mongodb/bin/mongod -f /opt/config/mongod.conf




问题描述：（mongod和s也有同样的情况）
/usr/bin/mongod -f /etc/mongoc.conf 
about to fork child process, waiting until server is ready for connections.
forked process: 911
ERROR: child process failed, exited with error number 1

查看mongoc日志如下：
ERROR: Cannot write pid file to /var/run/mongodb/mongoc.pid: No such file or directory



日志说的很明白了，无法写入pid文件到/var/run/mongodb/mongoc.pid下。

查看/var/run/下面会发现没有mongodb目录，所以建一个mongodb目录就可以了，启动的时候会自动在这个目录下生成pid文件。

然后再启动：


 /usr/local/mongodb/bin/mongod -f /opt/config/mongod                                                                                        .conf
http://118.24.221.219:3000/#h5/view/incomes_lis


reference:
https://blog.csdn.net/songrenqing/article/details/80629832

https://blog.csdn.net/sinat_30397435/article/details/50774175

# close mongod b
先通过shell连上服务器：
mongo
use admin
db.shutdownServer()
