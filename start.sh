#!/bin/bash
sudo port install gh

echo "Adding every file to the stage..."

git add -A

echo "Committing staged files..."

git commit -m "Testing deployment"

echo "Pushing committed files..."

echo "Please input name & password..."

git push origin master

node .