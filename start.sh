#!/bin/bash
docker run -it --rm --entrypoint sh "$@" -c "

          [ -x /usr/sbin/useradd ] && useradd -m -u $(id -u) u1 -s /bin/sh || adduser -D -u $(id -u) u1 -s /bin/sh;

          exec su - u1"

ssh-keygen -t rsa b 4096 -C "iamsuperv15@gmail.com"

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