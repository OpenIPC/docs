---
title: "Greg's APFPV"
description: "A verson forked from APFPV tailored specally toward UAVs like mid range FPV/GPS drones and planes ."
---

:::danger
**APFPV is ALPHA software.** You may lose control of your RC vehicle due to link loss or interference. Use at your own risk. We are not responsible for any damage or loss.
:::

APFPV stands for "Access Point FPV" - it's a simple way to get video from your drone to your phone, tablet, or computer using regular WiFi. Think of it like your drone creating its own WiFi hotspot that you connect to for live video.

## Why this APFPV version ?

"This version incorporates a-link adaptive streaming solution developed by [ Greg Spark ](https://github.com/sickgreg/) and [Joakim](https://github.com/snokvist/) , which dynamically adjusts video quality based on real-time network conditions."

### For Viewing (Ground Station):
- **Android**: PixelPilot app (recommended)
- **Computer**: Any computer with WiFi and a web browser
- **Professional**: Outdoor WiFi equipment (TP-Link, Ubiquiti, etc.)
- **Radxa GS**: With our latest SBC images you can easily whitch between WFB-ng and APFPV .
- **Any device**: That can receive RTP video streams

### VTX hardware 
Video transmitters (VTX) paired with RTL8812AU or EU -based Wi-Fi modules are supported. This includes popular solutions such as the RunCam WiFi Link V1/V2, EMAX Wyvern Link, and DIY implementations using the SSC338Q chipset like openipc thinker SD + NIC.
## For optimal performance, the use of RTL8812EU -based Wi-Fi modules is strongly recommended on both the transmitter and receiver ends.

## Step-by-Step Setup

### Installing Greg's APFPV Firmware


### Step 1: Connect Your VTX to Internet

**Physical connection:**
1. Connect your VTX to your computer using a Ethernet cable, USB adapter or UART adapter
2. Power on your VTX
3. Wait for it to fully boot up (about 1-2 minutes)

**Connect to your WiFi router:**
1. Your VTX needs to connect to your home WiFi to download the firmware
2. Use SSH to connect to your VTX (see "How to SSH" below)
3. Configure your VTX to connect to your home WiFi network

### Step 2: How to SSH Into Your VTX

**What is SSH?** SSH is a way to type commands directly into your drone from your computer.

**On Windows:**
1. Download and install [PuTTY](https://www.putty.org/) (free SSH program)
2. Open PuTTY
3. In "Host Name" field, enter your VTX's IP address
4. Port: 22
5. Connection type: SSH
6. Click "Open"
7. Login with your VTX's username (root) and password (12345)

**On Mac/Linux:**
1. Open Terminal
2. Type: `ssh root@[VTX-ip-address]`
3. Press Enter
4. Enter password when prompted

**Finding your VTX's IP address:**
- Check your router's admin page for connected devices
- Open a web browser on any device connected to your Wi-Fi.
Type your router’s gateway address in the address bar (common ones below) and press Enter:
192.168.1.1 or
192.168.0.1 or
192.168.1.254 or
10.0.0.1
Or try: http://routerlogin.net (Netgear) or http://my.router
(Tip: The correct address is usually shown as “Default Gateway” in the ipconfig or settings steps above.)

Log in with your router’s admin username and password
(Common defaults: username admin, password admin or password — check the sticker on your router if you never changed it.)
Look for sections called:
Connected Devices,
Device List,
Attached Devices,
DHCP Clients,

You’ll see a list of all devices with their names and IP addresses.
find the device named Sigmastar and it's IP address

- Or use network scanning apps on your phone
- Common default: 192.168.1.24 or 192.168.0.24

### Step 3: Install Firmware with One Command

Once you're connected via SSH and your VTX has internet access:

1. Copy and paste this exact command:
```bash
curl -L -o /tmp/openipc.ssc338q-nor-apfpv-greg08RC2.tgz https://github.com/sickgreg/OpenIPC_sickgregFPV_apfpv/raw/main/openipc.ssc338q-nor-apfpv-greg08RC2.tgz && sysupgrade --archive=/tmp/openipc.ssc338q-nor-apfpv-greg08RC2.tgz -f -n
```

2. Press Enter

3. Wait for the download and installation (5-10 minutes)

4. Your VTX will automatically reboot when finished

**That's it!** Your VTX now has APFPV firmware installed. Make sure you unplug the ethernet cable after you finish for the stream to work properly.
## From this point forward, the setup process follows the same structure and conventions as the OpenIPC APFPV firmware. Please refer to the corresponding APFPV section in the official OpenIPC documentation.
### For a more detailed explanation, please refer to Greg’s official guide on GitHub:
[Sickgreg OpenIPC_sickgregFPV_apfpv ](https://github.com/OpenIPC/firmware/wiki/APFPV](https://github.com/sickgreg/OpenIPC_sickgregFPV_apfpv))
