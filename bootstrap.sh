#! /usr/bin/env bash

sudo apt-add-repository ppa:ondrej/apache2
sudo apt-add-repository ppa:ondrej/php5
sudo apt-get -y update
sudo apt-get -y upgrade
sudo apt-get -y dist-upgrade
sudo apt-get install -y apache2 php5 nginx emacs24 python-dev python-pip
if ! [ -L /var/www ]; then
    rm -rv /var/www
    ln -fs /vagrant /var/www
fi
