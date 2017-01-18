#!/usr/bin/env bash
#cd ./src/kai
#cd ../
#使用更新后的版本
node r.js -o app.build.pc.js
cp ../dist/version ../app/version
cp ../app/hualianqianbao.apk ../dest/hualianqianbao.apk
echo "uglify pc complete"
