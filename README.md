# Getting Started

## Quick Start
Install Vagrant

```
$ curl -o vagrant.dmg https://releases.hashicorp.com/vagrant/1.8.6/vagrant_1.8.6.dmg
```

Build app:

```
$ git clone git@github.com:shiplet/korgapp.git
$ cd korgapp
$ vagrant up
$ cd public
$ npm install && gulp dev
```

Successful server build: `http://localhost:8000` will show `No Response Recorded`

Successful client build: `browser-sync` will auto-launch the app


## Quick Start (explained)

#### Build the Server
Clone the repo, and install Vagrant.

Vagrant creates virtual environments directly on your machine,
which makes it a lot easier to simulate live and production servers.

```
curl -o vagrant.dmg https://releases.hashicorp.com/vagrant/1.8.6/vagrant_1.8.6.dmg
```

Open the downloaded file `vagrant.dmg`, and go through the OSX install process.
After Vagrant installs, `cd` into the project directory and boot Vagrant.
It may ask you to install a VirtualMachine software. I use [VirtualBox](https://www.virtualbox.org/wiki/Downloads).

```
$ cd korgapp
$ vagrant up
```

If this is your first time building the app, this part will take a super long time
because it has to download the Ubuntu 14.04 Trusty Tahr kernel. It might be a good
time to make lunch or go for a walk or browse Reddit.

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

From here, verify a successful server build by visiting `http://localhost:8000`.

You should see

```
No Response Recorded
```

as the sole HTML output. If so, your server is up and running.

#### Build the Client
To build the client

```
$ cd public
$ npm install && gulp dev
```

This will install all necessary `npm` packages and dependencies. Upon a successful build, `browser-sync` will
automatically launch your system's default web browser. You should see the KorgApp UI.

To test communication between the server and client, click the KORG logo in the top left, and enter `test` for both
username and password. 

```
username: test
password: test
```

This user was ceated as part of the `MongoDB` build process. The script is located in `korgapp/korg/mongo_init.js`.

If the login is successful, the client redirects to the `Add a Waveform` view.

That's it! Happy devving!

(p.s. - I still need to put together a todo list, will have that up before long)

## Debugging Server Build
If Vagrant throws an error like:
```
Vagrant cannot forward the specified ports on this VM ...
```

Run the following commands to debug:

```
$ vagrant global-status
```

If there are any VMs listed as using this project's directory, you'll get an output like

```
id       name    provider   state   directory
------------------------------------------------------------------------
3e89c24  default virtualbox running /path/to/korgapp
```

Use the `id` that appears, in this case `3e89c24`, and run

```
$ vagrant destroy 3e89c24
```

If after destroying the box, the `vagrant up` command throws the same error, run the command

```
$ lsof -i tcp:8000
```

You should see an output like

```
COMMAND     PID    USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
VBoxHeadl 21342    user   18u  IPv4 0xa5e9569cab2f579f      0t0  TCP *:irdmi (LISTEN)
```

In this case, grab the number under `PID` and run

```
$ sudo kill 21342
```

Run `vagrant up` again. If it **still** doesn't work, run for the hills.


# Project Tech
This project is built using:

* Ubuntu 14.04
* Vagrant
* Angular 1.5.8
* Python2
* uWSGI
* nginx