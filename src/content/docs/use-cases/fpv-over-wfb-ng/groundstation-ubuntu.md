---
title: GroundStation on Ubuntu 22.04
description: A guide for setting up a WFB-NG based groundstation on Ubuntu 22.04
sidebar:
  order: 7
---

Video version: - [OpenIPC - Prepare GroundStation: Ubuntu + QGroundControl](https://www.youtube.com/watch?v=JMtRAsOm0Dc)

## Prepare Ubuntu 22.04
Wifi drivers require compilation for specific linux kernels, Ubuntu 22.04 (jammy) ships with Linux 5.15 LTS kernel. Newer Ubuntu versions will break the wifi card drivers. 

**Download and install Ubuntu 22.04 (Jammy)**

[Ubuntu 22.04.5 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/)

**update apt and install required packages**
```
sudo apt update
```

```
sudo apt install dkms git python3-all-dev net-tools virtualenv fakeroot debhelper python3-twisted \
 libpcap-dev python3-pyroute2 python3-future python3-all
```

## Install Libsodium
Libsodium is used to encrypt data sent through the wfb-ng pipeline. It can be installed either via apt, or by building it directly from the latest stable source. 

**Install from apt.**
```
sudo apt install libsodium-dev
```
**Install from source.**
```
cd
git clone https://github.com/jedisct1/libsodium --branch stable
cd libsodium
./configure
make && make check
sudo make install
```

## Wifi card driver
svpcom's rtl8812au and rtl8812eu wifi drivers offer superior performance for wfb-ng compared to standard rtl8812au/eu drivers. To use a usb rtl8812au or rt8812eu wifi card, you need to install their respective drivers.

**Install rtl8812au driver from source:**
```
cd
git clone -b v5.2.20 https://github.com/svpcom/rtl8812au.git
cd rtl8812au/
sudo ./dkms-install.sh
```

**Install rtl8812eu driver from source:**
```
cd
git clone -b v5.15.0.1 https://github.com/svpcom/rtl8812eu.git
cd rtl8812eu/
sudo ./dkms-install.sh
```

As long as your usb wifi cards were not plugged in when Ubuntu was installed, you should not have any driver conflicts with stock realtek drivers.

## WFB-NG
WFB-NG can be installed automatically via its setup script.

**Install WFB-NG from script.**

First with the usb wifi card plugged in, determine its wireless interface name:
```
sudo apt install wireless-tools -y
iwconfig
```
You will see something like this:
```
:~$ iwconfig
lo        no wireless extensions.

enp1s0    no wireless extensions.

wlxc8fe0f5e5805  IEEE 802.11  ESSID:off/any
          Mode:Managed  Access Point: Not-Associated   Tx-Power=18 dBm
          Retry short limit:7   RTS thr:off   Fragment thr:off
          Power Management:off
```
In this case, the rtl8812au wireless interface name is wlxc8fe0f5e5805
```
cd
git clone -b stable https://github.com/svpcom/wfb-ng.git
cd wfb-ng
sudo ./scripts/install_gs.sh "wireless_interface_name"  
```

## Channel configuration
WFB-NG operates according to config settings set in /etc/wifibroadcast.cfg use this config to set the channel, wifi region, and to route video and mavlink udp.
```
sudo touch /etc/wifibroadcast.cfg
sudo nano /etc/wifibroadcast.cfg
```
default `/etc/wifibroadcast.cfg` contents
```
[common]
wifi_channel = 165     # 165 -- radio channel @5825 MHz, range: 5815-5835 MHz, width 20MHz
                       # 1 -- radio channel @2412 Mhz,
                       # see https://en.wikipedia.org/wiki/List_of_WLAN_channels for reference
wifi_region = 'BO'     # Your country for CRDA (use BO or GY if you want max tx power)

[gs_mavlink]
peer = 'connect://127.0.0.1:14550'  # outgoing connection
# peer = 'listen://0.0.0.0:14550'   # incoming connection

[gs_video]
peer = 'connect://127.0.0.1:5600'  # outgoing connection for
                                   # video sink (QGroundControl on GS)
```

## Start, stop, restart WFB-NG service
Now with everything installed, you can run WFB-NG as a system service.

Start WFB-NG:
```
systemctl start wifibroadcast@gs
```

Stop WFB-NG:
```
systemctl stop wifibroadcast@gs
```

Check the status of WFB-NG:
```
systemctl status wifibroadcast@gs
```

Make WFB-NG start at boot:
```
systemctl enable wifibroadcast@gs
```

Get the last logs from WFB-NG service:
```
journalctl -xu wifibroadcast@gs -n 100
```

## Start WFB CLI
WFB-NG comes with a cli utility that allows you to see WFB-NG's status in real time in a nicely formatted menu

Note, this is not the same as running WFB-NG, nor is it required to use WFB-NG. It is however, very helpful.
```
wfb-cli gs
```


## Connecting to QgroundControl
If you have not done so already, install QgroundControl on the device/s you wish

[QGroundControl Download and Install](https://docs.qgroundcontrol.com/master/en/getting_started/download_and_install.html)

WFB-NG is able to send UDP video, and MAVLink streams to any device on your network using its IP Address. The default config uses the localhost IP Address 127.0.0.1 which keeps data streams on-device, this works well if you have QGroundControl installed locally. If you have QgroundControl installed on a different device, use that device's IP address instead.

```
sudo nano /etc/wifibroadcast.cfg
```
modify `/etc/wifibroadcast.cfg` contents
```
[gs_mavlink]
peer = 'connect://your_device_IP_address:14550'

[gs_video]
peer = 'connect://your_device_IP_address:5600'
```

When you open QGroundControl, it should automatically connect to the UDP MAVLink stream, If it doesn't, make sure your IP Address matches the `/etc/wfibroadcast.cfg', and make sure your firewall rules correctly let QGroundControl connect to devices on your local network. 

To add a video stream, open the video tab, choose `UDP h.265 Video Stream` as your source, set the URL to `0.0.0.0:5600`, and enable `Low Latency Mode`.  

<img width="496" height="742" alt="QGroundControl-Video-Stream-Settings" src="https://github.com/user-attachments/assets/53f03364-7fe2-4b3b-bcb3-11d871b128e7" />

