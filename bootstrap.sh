#! /usr/bin/env bash

apt-add-repository ppa:ondrej/apache2
apt-add-repository ppa:ondrej/php5
apt-get -y update
apt-get -y upgrade
apt-get -y dist-upgrade
apt-get install -y apache2
apt-get install -y php5
apt-get install -y nginx
apt-get install -y emacs24
if ! [ -L /var/www ]; then
    rm -rv /var/www
    ln -fs /vagrant /var/www
fi
