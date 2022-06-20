#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

rm -rf leetcode

git clone git@github.com:xiechengyu/leetcode.git

node build.js

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:xiechengyu/xiechengyu.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -

git pull
git add .
git commit -m 'update'
git push origin main