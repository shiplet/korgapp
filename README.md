# Getting Started

Clone the repo, and install Vagrant.

Vagrant creates virtual environments directly on your machine,
which makes it a lot easier to simulate live and production servers.

```
curl -o vagrant.dmg https://releases.hashicorp.com/vagrant/1.8.6/vagrant_1.8.6.dmg
```

Open the downloaded file `vagrant.dmg`, and go through the OSX install procedures.
After Vagrant installs, `cd` into the project directory and boot Vagrant.

```
$ cd korgapp
$ vagrant up
```

A successful build will show

```
==> default: Successfully installed uwsgi pymongo
==> default: Cleaning up...
==> default: korgapp start/running, process 9627
==> default: root      9631  0.0  0.1  10460   916 ?        S    16:24   0:00 grep korgapp
==> default: vagrant   9632  0.0  1.0  35240  5324 ?        R    16:24   0:00 uwsgi --ini korgapp.ini
==> default:  * Testing nginx configuration
==> default:    ...done.
==> default:  * Restarting nginx nginx
==> default:    ...done.
==> default: MongoDB shell version: 2.4.9
==> default: connecting to: 127.0.0.1/korg
```

as the last 11 lines of console output (this could take several minutes depending on connection speed). 
These signify, in order, that:
* both `uwsgi` and `pymongo` successfully installed
* the `korgapp` has registered to run when the virtual environment boots
* the `vagrant 	9632 ...` process is the first of 5 system processes dedicated serving the app
* `nginx` successfully tested all config files
* `nginx` successfully restarted
* `MongoDB` successfully started and connected to `127.0.0.1/korg`


