#!/bin/bash
ssh-keygen -t rsa b 4096 -C "iamsuperv15@gmail.com"

echo "------------------\nAdding every file to the stage...\n------------------"

git add -A

echo "------------------\nCommitting staged files...\n------------------"

git commit -m "Testing deployment"

echo "------------------\nPushing committed files..."

echo "Please input name, and then password...\n------------------"

git push origin master

echo "------------------\nNow starting node in the entrypoint...\n------------------"
node .