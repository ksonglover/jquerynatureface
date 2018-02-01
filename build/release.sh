#/bin/sh
rm -rf /tmp/natureface
mkdir /tmp/natureface
/bin/cp -rf template/ js/ /tmp/natureface
/bin/cp demo.html /tmp/natureface/index.html
/bin/rm -rf downloads/NatureFace-demo.tar.gz
cd /tmp/natureface/
tar zcvf /tmp/NatureFace-demo.tar.gz index.html template js
cd -
/bin/cp -rf /tmp/NatureFace-demo.tar.gz downloads/
