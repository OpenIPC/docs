---
title: GroundStation on Radxa ZERO 3W
description: How to make a Radxa ZERO 3W work with OpenIPC
version: 1.9.9
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
11. [iSpy Another OpenIPC VRX](https://www.printables.com/model/1196394-ispy-another-openipc-sbc-vrx-case)
12. [The Crown](https://www.printables.com/model/1233920-the-crown-radxa-sbc-openipc-ground-station-3x-eu2)
13. [Radxa Zero 3W OpenIPC](https://www.printables.com/model/1086989-radxa-zero-3w-openipc)
14. [OpenIPC GS Radxa zero VRX Case](https://www.printables.com/model/1109931-openipc-gs-radxa-zero-vrx-case)
15. [OpenIPC Radxa Zero 3W VRX case](https://www.printables.com/model/1238633-openipc-radxa-zero-3w-vrx-case-3x-eu-rx-cards-w-hd)
16. [OpenIPC Ruby_FPV GS Radxa zerro 3w based](https://www.printables.com/model/1238753-openipc-ruby_fpv-gs-radxa-zerro-3w-based)

## Prerequisites 

- Download lastest [image](https://github.com/OpenIPC/sbc-groundstations/releases/latest)
- Install [PUTTY](https://www.putty.org/)
- Optionally Install an OpenIPC Configurator
    - [Multi-Platform OpenIPC Configurator](https://github.com/OpenIPC/openipc-configurator)
    - [Windows OpenIPC Configurator](https://github.com/OpenIPC/configurator/releases/)

## STEP 1: Flashing

### SD Card
* See [getting started](https://wiki.radxa.com/Zero/getting_started)
  - Tools like [balenaEtcher](https://etcher.balena.io/) or [rufus](https://rufus.ie/en/) can write an image an sd card.
  - Radxa provided [tools](https://dl.radxa.com/tools/)

### EMMC
* 1.9.9 image is now able to flash the image to your onboard emmc.
  - Flash the radxa_1-9-9_emmc-flasher image to an sd card and boot,
  - Then press the MHZ_TOGGLE gpio button (pin 38) once to begin flashing the image to your onboard emmc.
  - Be patient, the total procedure should take around 3-5 minutes.

## STEP 2: Setup

- Connect a screen and wireless adapter(s) to radxa.

### SD Card
* Edit the settings files like a usb drive:
    - Plug in your sd card to your computer and a directory called /config should mount.
    - Inside, navigate to the scripts folder.
      
    - Set your desired screen resolution and refresh rate in the screen-mode file. 
        - Format is WxH@fps -- Common values would be 1920x1080@60, 1920x1080@120. 1280x720@60, 1280x720@120. (You can do higher camera framerate than goggles are set to.)
        - You want to set it to either the highest framerate or highest resolution the screen is capable of.

    - For smoother DVR playback, set the dvr-fps inside the rec-fps file to the fps at which your camera is shooting. e.g. 60, 90, 120

    - If you are using ground-based msposd, set your osd file to ground now.

### EMMC/SD Card
* AP Mode
    - Default screen-mode is 1920x1080@60. Granted a compadible screen is connected (& wifi adapters)... The openIPC service will start
    - Long-press the 40MHz_Toggle button, gpio_38, and the onboard wi-fi will enter AP mode and broadcast a wireless network called 'RadxaGroundstation' with password 'radxaopenipc'. 
    - Connect to this network and navigate in a browser to 'radxa-zero3.local' or '192.168.4.1:5000' to enter the webUI where you can access DVR files, change groundstation settings, and change camera settings.
    - Change the screen-mode, OSD, & rec-fps settings accordingly.
      
* Keyboard Setup
    - Without wifi adapters connected (Or if connected screen is not 1080@60fps compadible...) the openIPC service will not start
    - Connect a keyboard to the device.
    - Follow the details in the 'Optionals' tab below regarding logging in & setting up a home network to allow for remote connection.
    - While keyboard is connected to device, you can navigate to /config/scripts/ and edits the files accordingly. (Or do so from SSH.)

* EMMC DVR Recordings
    - DVR is saved to /media on the emmc.
    - If you want to have onboard emmc and have videos saved to an empty sd card, mount the sd card to /media in fstab.
    - [See more](https://github.com/OpenIPC/sbc-groundstations/wiki/How-to-save-DVR-files-to-the-SD-card-slot-(for-emmc-only))

## Step 3: Boot the system. 

If all your settings are correct and you have a wireless card attached to the usb for wfb-ng, then the openipc.service will begin.

Note AP mode may not work the very first time you boot the system. Give the system a reboot and things will work.

DVR is saved to the media folder in your root directory. DVR can be accessed either at /media or via the AP mode webUI.

This image has support for groundstation-side rendering of MSPOSD over the wfb-ng tunnel. To enable this functionality, go into /config/scripts/osd and change from air to ground. You must enable the MSPOSD forwarding (or GROUND osd) on the camera for this to work.

Adjust your channel as needed.

(FYI the 40mhz radxa tunnel will connect to 20mhz camera streams.)

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

## Optionals

Note: openipc.service fails without wifi adapters, unplug your adapters to be able to login to radxa:
- Username: radxa
- Password: radxa

SSH into camera:
Use the onboard wi-fi to connect to your home network: (note - if you are running your fpv system on the 5.8ghz channels, it would be ideal to connect the onboard wifi to a 2.4ghz network to avoid any possible interference.)
- Method 1: Enter nmtui, go down to Activate a connection and activate one of the detected wifi networks.
- Method 2: Edit the config.txt file in /config to contain connect_wi-fi YOUR_WIFI_SSID YOUR_WIFI_PASSWORD
To check your connection after, run nmcli and your wlan0 connection should be green. Make a note of your ip address. We will need this to ssh into the system later.

Changing password to radxa (for security):
Once logged into the radxa type 'passwd' to change password for the user.

Powering radxa from GPIO Pins:
Wire any ground pin & pin 2/4 with 5v from at least a 1a power source.

Using power USB as host port (allows 2 wifi adapters without usb hub):
Type in terminal restup and navigate to overlays. From there manage the overlays, and find the 'OTG to Host' port setting. Enable it and reboot radxa.

It is possible to overclock your radxa for higher bitrate performance.

## About Adaptive Link

This service will only trigger when enables on the camera for bidirectional link.

## Result

<img src="https://github.com/user-attachments/assets/43e8552e-9d24-4d7b-9120-cd2fc08a9934" alt="drawing" width="200"/>

## Where to buy

- [Radxa Zero 3W](https://radxa.com/products/zeros/zero3w/#buy)
- [AliExpress](https://www.aliexpress.us/item/3256807428419499.html)

## RubyFPV
see [RubyFPV Hardware](https://rubyfpv.com/hardware.php)
