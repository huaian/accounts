#!/usr/bin/env bash
#cd ./src/kai
#cd ../
node r.js -o app.build.js
cp -rf ../dist/version ../app/version
cp -rf ../app/hualianqianbao.apk ../dest/hualianqianbao.apk
echo "uglify complete"
