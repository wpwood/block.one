#!/bin/bash
# This file should be run in the block.one directory that has been cloned from
# https://github.com/wpwood/block.one.git
#
# Requirements:
# 1. The block.one repository has been cloned
# 2. Node.js and npm have been installed
# 2. The 'serve' node application has been installed via 'npm install -g serve'

git pull
npm install
npm run build
nohup serve -s build &
