#!/usr/bin/env bash

set -e

set -x

cd ../

#projectName(project directory name) define
#PROJECTNAME=""

# Base directory for this entire project,including Kai and app
BASEDIR=$(cd $(dirname $0) && pwd)

echo "$BASEDIR";

# Source directory for unbuilt code. in kai and appPorject level.小呆是多了一层
SRCDIR="$BASEDIR/../"

echo "$SRCDIR";

#kernel directory
#KERNELDIR="$SRCDIR/kai"

#for kai build only
#KERNELDIR=${1:-"$SRCDIR/kai"}

#project directory
PROJECTDIR="$BASEDIR"

#app directory
APPDIR="$PROJECTDIR/app"

# Source directory for scripts inside kai version directory
SRCSCRITPSDIR="$KERNELDIR/0.1/scripts"

# Directory containing dojo build utilities
#TOOLSDIR="$SRCSCRITPSDIR/util/buildscripts"
TOOLSDIR="$PROJECTDIR/build/util/buildscripts"

echo "$TOOLSDIR";

# Destination directory for built code
DISTDIR="$PROJECTDIR/dist"

# Destination directory for built code
DESTDIR="$PROJECTDIR/dest"

# Source directory for all Kai scripts
DISTSCRIPTSDIR="$DISTDIR/kai/0.1/scripts"

# Main application package build configuration
#PROFILE="$BASEDIR/profiles/app.profile.js"

PROFILE="$PROJECTDIR/build/profiles/app.profile.js"
if [ $# -ne 0 ];then
PROFILE="$PROJECTDIR/build/profiles/app.profile.server.js"
fi

# Configuration over. Main application start up!

#检查是否存在build目标文件夹
if [ ! -d "$TOOLSDIR" ]; then
	echo "Can't find Dojo build tools -- did you initialise submodules? (git submodule update --init --recursive)"
	exit 1
fi

#是否安装nodejs 模块
#if [ ! -d node_modules ]; then
#	echo "Can't find Node.js dependencies -- did you install them? (npm install)"
#	exit 1
#fi

echo "Building application with $PROFILE to $DISTDIR."

echo -n "Cleaning old files..."
if [ ! -d "$DISTDIR" ]; then
	mkdir "$DISTDIR"
fi
#删除目标文件夹内容
cd "$DISTDIR"
rm -rf *.*
rm -rf *
#建立目标script文件夹
mkdir -p "$DISTSCRIPTSDIR"
echo -n " Done"

# Copy & minify index.html to dist
echo -n " Copy & minify index.html to dist..."
cat "$APPDIR/index.html" | \
perl -pe 's/\/\/.*$//gm;       # Strip JS comments' |
perl -MTime::HiRes -MPOSIX -pe 'qw(time);qw(strftime);my $t = time;my $date = strftime "%Y%m%d%H%M%S", localtime $t;s/_v=/_v=$date/gm;       # Strip JS comments' |
perl -pe 's/\n/ /g;            # Replace newlines with whitespace' |
perl -pe 's/<\!--.*?-->//g;    # Strip HTML comments' |
perl -pe 's/isDebug: *true,//; # Remove isDebug' |
perl -pe 's/cacheBust: *false,//; # Remove cacheBust false' |
perl -pe 's/\s+/ /g;           # Collapse whitespace' > "$DISTDIR/index.html"
echo -n "Done"

#copy index.html
cp  -r "$DISTDIR/index.html" "$DESTDIR/index.html"

#copy main file
#echo -n " Copy main.js to dist..."
#cat "$SRCSCRITPSDIR/kaiMain/main.js" > "$DISTSCRIPTSDIR/kaiMain/main.js"
#echo -n "Done"

echo -n "Back to BASEDIR"
cd "$BASEDIR"
echo "$BASEDIR"

#"$TOOLSDIR/build.sh" --bin node-debug --profile "$PROFILE" --releaseDir "$DISTDIR"


echo "Build complete"
