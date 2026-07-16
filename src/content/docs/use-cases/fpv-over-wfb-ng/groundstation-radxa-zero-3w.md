---
title: Ground Station on Radxa Zero 3W
description: Configure Radxa Zero 3W as an OpenIPC WFB-NG ground station.
version: 1.9.9
sidebar:
  order: 6
---

Use this page when you are already using Radxa Zero 3W as the receiver for an OpenIPC WFB-NG FPV setup. Board notes, image projects, enclosure models, and purchase links live on the [Radxa Zero 3W/3E hardware page](/hardware/sbcs/radxa-zero-3w-3e/).

## What You Need

- Radxa Zero 3W or compatible Radxa Zero 3 board.
- Good quality SD card, 16 GB or larger, or eMMC setup.
- Supported USB Wi-Fi adapter for WFB-NG.
- HDMI display, goggles, or another supported video output path.
- Optional keyboard for local setup.
- Optional [OpenIPC Companion](/use-cases/fpv-over-wfb-ng/openipc-companion/) on a computer.

Download the current image from the [OpenIPC SBC Ground Station releases](https://github.com/OpenIPC/sbc-groundstations/releases/latest). Use the hardware page if you need background on Buildroot, Stock Edition, or alternative image projects.

## Flash the Image

### SD Card

1. Download the Radxa Zero 3 ground-station image.
2. Extract the `.img.xz` file with 7-Zip or another archive tool.
3. Flash the `.img` file to the SD card with balenaEtcher, Rufus, or a similar tool.
4. Reinsert the card after flashing. The config partition should mount on your computer.

### eMMC

Some older 1.9.9 images include an eMMC flasher flow:

1. Flash the `radxa_1-9-9_emmc-flasher` image to an SD card.
2. Boot the board from this SD card.
3. Press the `MHZ_TOGGLE` GPIO button on physical pin 38 once to begin flashing eMMC.
4. Wait several minutes and do not remove power during flashing.

Check the release notes for the image you use, because the exact eMMC procedure can change between image generations.

## Configure Before First Boot

After flashing, open the config partition on your computer and review the files in `/config/scripts`.

Common first settings:

- screen mode, for example `1920x1080@60`, `1920x1080@120`, `1280x720@60`, or `1280x720@120`;
- DVR frame rate in the recording FPS file;
- OSD mode, especially when using ground-side MSP OSD rendering;
- WFB-NG channel and bandwidth defaults if your image exposes them in config files.

Use the highest stable display mode supported by your screen or goggles. The display mode does not have to match the camera mode exactly.

## First Boot

1. Connect the display.
2. Connect the supported Wi-Fi adapter.
3. Insert the SD card or boot from eMMC.
4. Power the Radxa board.
5. Wait for the OpenIPC ground-station service to start.

If the service does not start, boot without Wi-Fi adapters and log in locally for troubleshooting.

Default local credentials on older images:

```text
username: radxa
password: radxa
```

Change the password after first login.

## AP Mode and Web UI

On supported images, long-press the 40 MHz toggle button on GPIO 38 to start AP mode. The board creates a Wi-Fi network:

```text
SSID: RadxaGroundstation
Password: radxaopenipc
```

Connect to it and open one of these addresses:

```text
http://radxa-zero3.local:5000
http://192.168.4.1:5000
```

Use the Web UI to access DVR files and change ground-station or camera settings.

## Buttons and GPIO

Common button assignments:

- physical pins 16 and 18: increase or decrease VRX channel;
- physical pin 38: toggle 20 MHz and 40 MHz bandwidth;
- physical pin 32: start or stop DVR recording.

:::caution
Use 40 MHz only with hardware that supports it. Some adapters cannot transmit or receive correctly in 40 MHz mode. See [EU/BU 40 MHz Issue](/use-cases/fpv-over-wfb-ng/eu-bu-40mhz-issue/).
:::

## DVR and Media Access

DVR location depends on the image and storage layout. Common paths include `/media`, `/home/radxa/Videos`, or a mounted SD card path.

Some images expose recordings through a media server. After connecting the ground station to your home network, open:

```text
http://GROUND_STATION_IP:8080
```

Replace `GROUND_STATION_IP` with the address shown by `nmcli`, your router, or the image Web UI.

## Network Access

To connect the board to your home network, either:

- run `nmtui` and activate a detected Wi-Fi network; or
- edit `/config/config.txt` and add the Wi-Fi connection line supported by your image.

If your FPV link uses 5.8 GHz, prefer a 2.4 GHz home network for management Wi-Fi to reduce interference.

## Optional Notes

- USB power can be converted to host mode on supported images through `rsetup` overlays. This can help when using two Wi-Fi adapters without a hub.
- Powering through GPIO is possible, but use a stable 5 V supply with enough current.
- Overclocking may improve high-bitrate performance, but test thermals before flying.
- Adaptive Link only works when the camera side is configured for bidirectional link. See [Installing Adaptive Link](/use-cases/fpv-over-wfb-ng/install-adaptive-link/).

## Next Steps

- [Hardware Selection](/use-cases/fpv-over-wfb-ng/hardware-selection/)
- [Link Tuning](/use-cases/fpv-over-wfb-ng/link-tuning/)
- [WFB-NG Bitrate Calculator](/use-cases/fpv-over-wfb-ng/wfb-ng-calculator/)
- [Radxa Zero 3W/3E Hardware](/hardware/sbcs/radxa-zero-3w-3e/)
