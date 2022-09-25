#!/bin/bash
apt -E install sudo

sudo useradd -u 997 naybiblu

ssh-keygen -t ed25519 -C "your_email@example.com"

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