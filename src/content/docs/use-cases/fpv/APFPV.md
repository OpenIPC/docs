---
title: "APFPV Firmware - Beginner's Guide"
description: "Simple WiFi-based FPV video transmission for beginners. Easy setup, no complex configuration required."
---

:::danger
**APFPV is ALPHA software.** You may lose control of your RC vehicle due to link loss or interference. Use at your own risk. We are not responsible for any damage or loss.
:::


APFPV stands for "Access Point FPV" - it's a simple way to get video from your drone to your phone, tablet, or computer using regular WiFi. Think of it like your drone creating its own WiFi hotspot that you connect to for live video.

## What is APFPV?

The APFPV firmware from the OpenIPC team creates direct WiFi communication between your drone's video transmitter (VTX) and your ground station. Instead of complex solutions, your drone simply acts like a WiFi router that you connect to directly.

This isn't meant to be revolutionary technology - it's designed to be **simple and accessible**, especially for people who find other FPV systems too complicated to set up.

## Why APFPV?

- No setup or configuration hassle
- Works with any WiFi-enabled device
- Browser-based interface (no apps required)
- Use your phone, tablet, laptop—anything

**Best For:**
- Learning FPV
- Ground vehicles, boats, or slow flying
- Basic planes/quads (no racing)
- Experimenting with ground stations

**Limitations:**
- 35–70ms delay (not for racing or fast aerobatics)
- Performance varies with distance and interference
- Only one WiFi device as a receiver is possible
- No signal aggregation

## What You'll Need

### For Your Drone (VTX):
- OpenIPC-compatible camera/board
- WiFi chip (RTL8812AU, RTL8812EU or RTL8733BU)

### For Viewing (Ground Station):
- **Android**: PixelPilot app (recommended)
- **Computer**: Any computer with WiFi and a web browser
- **Professional**: Outdoor WiFi equipment (TP-Link, Ubiquiti, etc.)
- **Any device**: That can receive RTP video streams

## Step-by-Step Setup

### Step 1: Installing APFPV Firmware

There are two ways to install APFPV firmware on your drone. The internet method is much easier if your drone can connect to WiFi.

## Method 1: Easy Internet Installation (Recommended)

### Step 1: Connect Your Drone to Internet

**Physical connection:**
1. Connect your drone to your computer using a Ethernet cable, USB adapter or UART adapter
2. Power on your drone
3. Wait for it to fully boot up (about 1-2 minutes)

**Connect to your WiFi router:**
1. Your drone needs to connect to your home WiFi to download the firmware
2. Use SSH to connect to your drone (see "How to SSH" below)
3. Configure your drone to connect to your home WiFi network

### Step 2: How to SSH Into Your Drone

**What is SSH?** SSH is a way to type commands directly into your drone from your computer.

**On Windows:**
1. Download and install [PuTTY](https://www.putty.org/) (free SSH program)
2. Open PuTTY
3. In "Host Name" field, enter your drone's IP address
4. Port: 22
5. Connection type: SSH
6. Click "Open"
7. Login with your drone's username (root) and password (12345)

**On Mac/Linux:**
1. Open Terminal
2. Type: `ssh root@[drone-ip-address]`
3. Press Enter
4. Enter password when prompted

**Finding your drone's IP address:**
- Check your router's admin page for connected devices
- Or use network scanning apps on your phone
- Common default: 192.168.1.24 or 192.168.0.24

### Step 3: Install Firmware with One Command

Once you're connected via SSH and your drone has internet access:

1. Copy and paste this exact command:
```bash
sysupgrade -k -r -n --url=https://github.com/OpenIPC/builder/releases/download/latest/openipc.ssc338q-nor-apfpv.tgz
```

2. Press Enter

3. Wait for the download and installation (5-10 minutes)

4. Your drone will automatically reboot when finished

**That's it!** Your drone now has APFPV firmware installed. Make sure you unplug the ethernet cable after you finish for the stream to work properly.

---

## Method 2: Manual Installation (No Internet Required)

Use this method if your drone cannot connect to internet or you prefer manual installation.

### Step 1: Download Firmware Files

1. On your computer, go to: https://github.com/OpenIPC/builder/releases/download/latest/openipc.ssc338q-nor-apfpv.tgz
2. Download the file
3. Extract/unzip it - you'll get two files:
   - `uImage.ssc338q`
   - `rootfs.squashfs.ssc338q`

### Step 2: Copy Files to Drone

**Using WinSCP (Windows):**
1. Download and install WinSCP
2. Open WinSCP
3. Protocol: SCP
4. Host name: Your drone's IP address
5. Username and password: Your drone's login credentials
6. Click "Login"
7. Navigate to `/tmp` folder on drone side
8. Copy both firmware files to `/tmp`

**Using SCP command (Mac/Linux):**
```bash
scp uImage.ssc338q root@[drone-ip]:/tmp/
scp rootfs.squashfs.ssc338q root@[drone-ip]:/tmp/
```

### Step 3: Install Firmware

1. SSH into your drone (see "How to SSH" above)
2. Type this command:
```bash
sysupgrade -z -n --kernel=/tmp/uImage.ssc338q --rootfs=/tmp/rootfs.squashfs.ssc338q
```
3. Press Enter
4. Wait for installation to complete (5-10 minutes)
5. Drone will reboot automatically

---

### Step 2: Connect to Your Drone

After your drone reboots:

1. On your phone/computer, look for WiFi networks
2. Connect to: **"OpenIPC"**
3. Password: **"12345678"**
4. Your device will automatically get an IP address (192.168.0.X)

**Network details:**
- Your drone's IP: `192.168.0.1`
- Video stream goes to: `192.168.0.10`
- Network range: `192.168.0.0/24`

### Step 3: View Live Video

**On Android (Easiest):**
- Download and open PixelPilot app
- Video should appear automatically

**On Any Computer:**
- Open web browser
- Go to: `http://192.168.0.1`
- You'll see the drone's beautiful WebUI with live video

**On Linux:**
Use GStreamer command:
```bash
gst-launch-1.0 udpsrc port=5600 ! application/x-rtp ! rtph265depay ! avdec_h265 ! fpsdisplaysink sync=false
```

**Any Other Device:**
Use any program that can receive RTP streams over UDP on port 5600.

## Customizing Your WiFi Network

**Change your WiFi name and password:**

Connect to your drone via UART or SSH and run:
```bash
fw_setenv wlanssid Drone
fw_setenv wlanpass openipcfpv
```
Replace "Drone" with your preferred network name and "openipcfpv" with your chosen password. 

**Change your WiFi Band and Frequency:**

Connect to your drone via UART or SSH and run:
```bash
fw_setenv wlanfreq 5700
```
Set the frequency you need in the 2.4GHz or 5GHz range

**Change your WiFi Transmitter Power:**

Connect to your drone via UART or SSH and run:
```bash
fw_setenv wlanpwr 2000
```
Be careful and cautious with power changes, it may damage your device.

Reboot your VTX for changes to take effect.


## Understanding the Setup

Think of your setup like this:
- **Your drone** = WiFi router (192.168.0.1)
- **Your ground station** = Connected device (192.168.0.10)
- **Video stream** = Data flowing from drone to your device
- **Web interface** = Control panel at http://192.168.0.1

## Supported Hardware

**WiFi Chips (VTX side):**
- RTL8812AU (high-power dual-band)
- RTL8812EU (high-power dual-band)
- RTL8733BU (compact USB adapter)

**Ground Station (your side):**
- Any smartphone or tablet
- Any computer with WiFi
- Professional outdoor WiFi equipment
- FPV goggles with WiFi capability
- Literally any WiFi-enabled device!

## Common Questions

### "What's the video delay?"
Expect 40-70ms delay. This varies based on:
- Distance between drone and ground station
- WiFi interference in the area
- Processing power of your ground station device
- Video quality settings

### "Can I use professional WiFi equipment?"
Yes! This is a major advantage of APFPV. You can use:
- TP-Link outdoor access points
- Ubiquiti wireless equipment
- Any commercial WiFi gear with good antennas
- This gives you much better range than typical FPV systems

### "What's the range?"
Range depends entirely on your equipment:
- Basic smartphone: 50-200 meters
- Good WiFi adapter: 200-500 meters  
- Professional outdoor equipment: 1+ kilometers

## Troubleshooting

### Can't See "OpenIPC" WiFi Network
1. Make sure drone is powered and firmware installed correctly
2. Wait 1-2 minutes after drone boots up
3. Try restarting the drone
4. Move closer to the drone

### Connected but No Video
1. Open web browser and go to `http://192.168.0.1`
2. Check if you can see the web interface
3. Try the PixelPilot app if on Android
4. Verify you're connected to the right network

### Poor Video Quality
1. Move closer to reduce distance
2. Check for WiFi interference from other devices
3. Try different location away from other WiFi networks
4. Adjust video quality in the web interface

### Web Interface Won't Load
1. Confirm you're connected to drone's WiFi
2. Try `http://192.168.0.1` in different browsers
3. Clear browser cache and cookies
4. Restart both devices

## Tips for Better Performance

### Optimizing Your Setup
- Use 5GHz WiFi when possible (less crowded than 2.4GHz)
- Keep line of sight between drone and ground station
- Use devices with good WiFi antennas. Use mix of directional and omnidirectional antennas.
- Test everything on the ground before flying

## Safety and Best Practices

**Before Flying:**
- Test complete system on the ground
- Verify video quality and delay
- Check WiFi range in your flying area
- Have backup visual observer

**While Flying:**
- Maintain visual line of sight
- Account for 40-70ms video delay
- Monitor WiFi signal strength
- Stay within tested range limits


## What Makes APFPV Special

Unlike complex mesh networking systems (WFB-NG, RubyFPV), APFPV:
- Requires no special ground station hardware
- Works with consumer WiFi equipment
- Has simple point-to-point connection
- Offers maximum compatibility with existing devices
- Provides easy web-based configuration

APFPV bridges the gap between complex FPV systems and simple solutions, making FPV accessible to everyone while supporting professional equipment for advanced users.
## APFPV with Runcam-RX or other GS that have many net cards

 1.  Download the latest APFPV radxa image [here](https://github.com/OpenIPC/sbc-groundstations/) and click on APFPV v0.0.1 link
 2. Flash SD card using balena etcher or other similar software
 3.  Once finished you just need to modify stream.sh and firstboot.sh

In /script/firstboot.sh copy this block of code that will shearch external wifi card at the beginning of the file it should replace the ```wlan0``` connection script.

```bash
#!/bin/bash

SSID="OpenIPC"
PASSWORD="12345678"
EXCLUDE_IFACE="wlan0"

echo "[*] scan wifi card"

# list every wifi interface wlx or wlan expect wlan0
WIFI_IFACES=$(ip -o link show | awk -F': ' '{print $2}' | grep -E '^wlan|^wlx' | grep -v "^$EXCLUDE_IFACE$")

INDEX=1

for IFACE in $WIFI_IFACES; do
    CONN_NAME="wifi$INDEX"

    echo ""
    echo "=== wifi card detected : $IFACE → $CONN_NAME ==="

    # delete old connection
    if nmcli connection show "$CONN_NAME" &>/dev/null; then
        nmcli connection delete "$CONN_NAME"
    fi

    # scan avaible wifi network
    nmcli device wifi rescan ifname "$IFACE"
    sleep 2

    # connect to APFPV network
    echo "[*] create $CONN_NAME..."
    nmcli connection add type wifi ifname "$IFACE" con-name "$CONN_NAME" ssid "$SSID" \
        wifi-sec.key-mgmt wpa-psk wifi-sec.psk "$PASSWORD" \
        ipv4.method auto connection.autoconnect yes

    # enable ip route
    if [[ "$CONN_NAME" == "wifi1" ]]; then

        nmcli connection modify "$CONN_NAME" ipv4.route-metric 100
    elif [[ "$CONN_NAME" == "wifi2" ]]; then

        nmcli connection modify "$CONN_NAME" ipv4.route-metric 200
    fi

    # enable connection
    nmcli connection up "$CONN_NAME"

    INDEX=$((INDEX + 1))
done

echo ""
echo "[✓] evrything done, end of script"
```
 4. In stream.sh disable ```wlan0``` using nmcli by pasting this line:

```bash
nmcli device disconnect wlan0
```

Thats all, now put the SD card in your vrx and turn it ON, you will get 2 wifi interfaces connected to APFPV credentials, and with ip route it will pick the best wifi card every time, the range should increase significantly.

Using APALink

APALINK is a C program designed to keep your video link alive. It uses fallback logic to switch to a lower bitrate (e.g., 2 Mbps) when the signal is weak.

Installation

To install it is easy:

1. Go to https://github.com/carabidulebabat/CaraSandbox  
2. Follow the steps in the README.md.

3. Copy the ap_alink binary to /usr/bin:

'''bash
chmod 777 +x /usr/bin
'''

4. Copy the ap_alink.conf file to the /etc/ folder.

5. (Optional) Copy vtxmenu.ini to /etc/ as well to enable the APFPV menu.

6. Go fly!

Settings

You can edit the ap_alink.conf file:

'''bash
bitrate_max=22 ## its the bitrate when good signal
bitrate_min=2 ## its the fallback bitrate
dbm_threshold=-47 ## this value is the threshold of when fallback mode needs to kick in. WARNING: set this value as your Wi-Fi RF sensitivity
'''

- A lower threshold = better image quality for longer, but video may lag or freeze under weak signal.
- A higher threshold = fallback triggers faster, possibly reducing lag but also image quality.

Recommended Settings

EU2:
'''bash
bitrate_max=12
bitrate_min=2
dbm_threshold=-52
'''

8812AU AF1:
'''bash
bitrate_max=10
bitrate_min=2
dbm_threshold=-48
'''

MSP Menu

Navigate to the MSP menu just like in HDZero or WFB-NG.

Inside the "BASIC SETTING" submenu, you have:

- Tx Power: 1500 or 2000 (representing MIN/MAX power). 25mw or 100mw.
- Channel: Every 5GHz Wi-Fi channel is listed.
- AutoPower 0 or 1 enable set tx power auto of iw

That’s All

Straightforward, easy to understand — just plug and fly without overthinking.
