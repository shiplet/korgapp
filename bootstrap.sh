#! /usr/bin/env bash

sudo apt-add-repository ppa:ondrej/apache2
sudo apt-add-repository ppa:ondrej/php5
sudo apt-get -y update
sudo apt-get -y upgrade
sudo apt-get -y dist-upgrade
sudo apt-get install -y apache2 php5 nginx emacs24 python-dev python-pip mongodb
if ! [ -L /var/www ]; then
    rm -rv /var/www
    ln -fs /vagrant /var/www
fi
sudo service apache2 stop
sudo pip install virtualenv

cd /var/www/korg/
. korgappenv/bin/activate
sudo pip install uwsgi
deactivate

touch /etc/init/korgapp.conf
echo "description \"uWSGI instance to serve korgapp\"" >> /etc/init/korgapp.conf
echo "" >> /etc/init/korgapp.conf
echo "start on runlevel [2345]" >> /etc/init/korgapp.conf
echo "stop on runlevel [!2345]" >> /etc/init/korgapp.conf
echo "" >> /etc/init/korgapp.conf
echo "setuid vagrant" >> /etc/init/korgapp.conf
echo "setgid www-data" >> /etc/init/korgapp.conf
echo "script" >> /etc/init/korgapp.conf
echo "	cd /var/www/korg" >> /etc/init/korgapp.conf
echo "	. korgappenv/bin/activate" >> /etc/init/korgapp.conf
echo "	uwsgi --ini korgapp.ini" >> /etc/init/korgapp.conf
echo "end script" >> /etc/init/korgapp.conf

sudo start korgapp
ps aux | grep korgapp

touch /etc/nginx/sites-available/korgapp.conf
echo "server {" >> /etc/nginx/sites-available/korgapp.conf
echo "	listen 8080;" >> /etc/nginx/sites-available/korgapp.conf
echo "	server_name 0.0.0.0;" >> /etc/nginx/sites-available/korgapp.conf
echo "	location / {" >> /etc/nginx/sites-available/korgapp.conf
echo "		include 	uswgi_params;" >> /etc/nginx/sites-available/korgapp.conf
echo "		uwsgi_pass 	unix:/tmp/korgapp.sock" >> /etc/nginx/sites-available/korgapp.conf
echo "	}" >> /etc/nginx/sites-available/korgapp.conf
echo "}" >> /etc/nginx/sites-available/korgapp.conf

sudo ln -s /etc/nginx/sites-available/korgapp.conf /etc/nginx/sites-enabled/

sudo service nginx configtest

sudo service nginx restart