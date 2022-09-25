#!/bin/bash
git remote -v
git remote set-url origin git@github.com:naybiblu/mangjuan.git
git remote -v

echo "------------------
Adding every file to the stage...
------------------"

git add -A

echo "------------------
Committing staged files...
------------------"

git commit -m "Testing deployment"

echo "------------------
Pushing committed files..."

echo "Please input name, and then password...
------------------"

git push origin master

echo "------------------
Now starting node in the entrypoint...
------------------"

node .