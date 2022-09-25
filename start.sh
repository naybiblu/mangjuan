#!/bin/bash
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

[Note] Forgotten? Your name should be your Github username, while password can be seen in .env file.
------------------"

git push origin master

echo "------------------
Now starting node in the entrypoint...
------------------"

node .