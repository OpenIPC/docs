---
title: GroundStation on Radxa ZERO 3W
description: How to make a Radxa ZERO 3W work with OpenIPC
version: 1.9.1
---

### Radxa OpenIPC Ground Station
[Radxa 101](https://wiki.radxa.com/Zero/getting_started)

## Enclosure Models

1. [OpenIPC VRX Enclosure](https://www.printables.com/model/1051224-openipc-vrx-enclosure)
2. [OpenIPC Radxa GS Case](https://www.printables.com/model/967795-openipc-radxa-gs-case)
3. [Another OpenIPC Radxa GS Case](https://www.printables.com/model/979788-another-openipc-radxa-gs-case)
4. [OpenIPC GS Case V1](https://www.printables.com/model/1034290-openipc-gs-case-v1)
5. [A Case for the OpenIPC GS](https://www.printables.com/model/988543-a-case-for-the-openipc-gs)
6. [Radxa Zero 3W GS Box](https://www.printables.com/model/822826-radxa03w-gs_box)
7. [OpenIPC Radxa Zero 3W HDMI Ground Station](https://www.printables.com/model/1020246-openipc-radxa-zero-3w-hdmi-ground-station)
8. [Radxa Zero 3W Case for OpenIPC](https://www.printables.com/model/1054879-radxa-zero-3w-case-for-openipc)
9. [OpenIPC VRX Case on Thingiverse](https://www.thingiverse.com/thing:6680584)
10. [OpenIPC Radxa Zero 3W HDZero Rail Mount](https://www.printables.com/model/811132-openipc-radxa-zero-3w-hdzero-goggle-case-rail-moun/files)

## Prerequisites 

- Install [PUTTY](https://www.putty.org/)
- Optionall Install an OpenIPC Configurator
    - [Windows OpenIPC Configurator](https://github.com/OpenIPC/configurator/releases/)
    - [Multi-Platform OpenIPC Configurator](https://github.com/OpenIPC/openipc-configurator)
- Download lastest [image](https://openipc.org/cameras/vendors/hisilicon/socs/hi3536dv100/download_full_image?flash_size=16&flash_type=nor&fw_release=fpv)

## Flashing

* SD Card see [getting started](https://wiki.radxa.com/Zero/getting_started)
  - Tools like [balenaEtcher](https://etcher.balena.io/) or [rufus](https://rufus.ie/en/) can write an image to media storage.
  - Tools like [RaspberryPI Imager](https://www.raspberrypi.com/software/) or Win32 Disk Imager can create backup images of media storage.
  - Radxa provided [tools](https://dl.radxa.com/tools/)

* EMMC
[How to flash the image to your onboard emmc](https://github.com/OpenIPC/sbc-groundstations/blob/master/radxa_pi_zero_3w/flashing_to_the_onboard_memory.md)

## Setup Process
Note: for RubyFPV you will either need a USB network dongle

![fpv-radxa-usbc-lan](https://github.com/user-attachments/assets/6fe0c218-b4c2-4041-a676-ebb490743a85)

or access to serial console, please check [here](https://wiki.radxa.com/Zero/dev/serial-console) on how to do that.

- Step 1 - Flash the image to either your onboard emmc or a micro SD card. Connect a screen and a wired keyboard to your radxa (you may need a usb-a to usb-c adapter or hub) and boot the system.
- Step 2 - The system should boot to a CLI. Login as either radxa/radxa or root/root
- Step 3 - Use the onboard wi-fi to connect to your home network: (note - if you are running your fpv system on the 5.8ghz channels, it would be ideal to connect the onboard wifi to a 2.4ghz network to avoid any possible interference.)
    - Method 1: Enter nmtui, go down to Activate a connection and activate one of the detected wifi networks.
    - Method 2: Edit the config.txt file in /config to contain connect_wi-fi YOUR_WIFI_SSID YOUR_WIFI_PASSWORD
    - Method 3: While in the scripts folder, run the wifi-connect.sh script.
    - To check your connection after, run nmcli and your wlan0 connection should be green. Make a note of your ip address. We will need this to ssh into the system later.
- Step 4 - Set your desired screen resolution and refresh rate in the screen-mode file. Enter pixelpilot --screen-mode-list to list the available modes your connected display can handle. Then enter sudo nano /config/scripts/screen-mode and change to your desired specifications. Format is WxH@fps -- Common values would be 1920x1080@60, 1920x1080@120. 1280x720@60, 1280x720@120. For smooth DVR playback, set the rec-fps with sudo nano /config/scripts/rec-fps to the fps at which your camera is shooting. e.g. 60, 90, 120
    - If you want to run the highest frame-rate your connected screen is capable of, run sudo ./config/scripts/highest_framerate.sh
    - If you want to run the highest resolution your connected screen is capable of, run sudo ./config/scripts/highest_resolution.sh
- Step 5 (optional) - Set your WFB-ng channel in /etc/wifibroadcast.cfg and transfer your gs.key to /etc (A standard gs.key and drone.key are now provided)
- Step 6 - Shutdown the system, disconnect the keyboard, and connect your wifi card. Boot the system and SSH from a separate computer.
- Step 7 - Test the system. Run wfb-cli gs and plug in your camera. Make sure you are properly getting video and telemetry packets. Hit CTRL-C to exit the wfb-cli. Run sudo systemctl start openipc.service and the display connected to the radxa should change to your video feed. Press your DVR button. The stream should stop (the screen will go black for a second) and a new stream being recorded should start. Press the dvr button again to stop the saving stream and go back to the display stream. (Again, the stream should go black for a second. If it doesn't, press the button again) Confirm there is a .mp4 video file in /media by going to x.x.x.x:8080 in a browser, replacing x.x.x.x with your radxa's ip address. . Run sudo systemctl stop openipc.service to stop testing.
- Step 8 - Last and final step. Once you have confirmed the system is working and you have set your desired settings, run sudo systemctl enable openipc.service to have the stream begin on boot.

## GPIO Buttons
- Connect a button or switch to 3.3v and physical pins 16/18 to increase/decrease your vrx channel respectively. 
- Connect a button or switch to physical pin 38 and 3.3v to toggle your vrx bandwidth between 20MHz and 40Mhz. 
- Connect a button or switch to join 3.3v and pin 32 to start/stop recordings.
![402592117-6b524a5a-37d8-4bc0-8bdd-e3b15b33ddf5](https://github.com/user-attachments/assets/83bf17f5-7504-411e-9544-41adf2a300bb)

To record DVR, push the button once. The stream will start and DVR will begin recording. When finished, push the button once to stop the recording and save the file.

DVR is saved to the Videos folder in your home directory. DVR can be accessed either at /home/radxa/Videos or via a media server. Connect your groundstation to your home network and it can be accessed via a web browser at x.x.x.x:8080 -- replace x.x.x.x with your groundstation's local ip address.

Connect Led long lead to +5v, Led short lead via a 1k resistor to GPIOAO_2.

```bash
sudo gpioset gpiochip4 11=0      # turn LED on
sudo gpioset gpiochip4 11=1      # turn LED off (actually it is very                             # simply lit because i guess logic level 0 is not 0 volts)
```

Circuit wiring: +5v —> +Led- —-> 1k resistor —> pin 28 on Radxa z3w

<hr>

A note about the DVR recording in this image. To ease the strain on the processor, we record to to a ts file rather than mp4 or mkv. As a result, there is no "smear" effect recorded, the uncaptured frames are simply dropped. You may notice jumps in your recording where there was no frame information.

## Result

<img src="https://github.com/user-attachments/assets/43e8552e-9d24-4d7b-9120-cd2fc08a9934" alt="drawing" width="200"/>

## Where to buy

- [Radxa Zero 3W](https://radxa.com/products/zeros/zero3w/#buy)
- [AliExpress](https://www.aliexpress.us/item/3256807428419499.html)

## RubyFPV
see [RubyFPV Hardware](https://rubyfpv.com/hardware.php)
