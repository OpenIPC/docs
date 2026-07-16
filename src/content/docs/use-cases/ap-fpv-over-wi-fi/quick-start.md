---
title: Quick Start
sidebar:
  order: 2
description: Install AP FPV firmware, connect to the VTX access point, and view the live video stream.
---

This guide gets a supported OpenIPC VTX running AP FPV with the default Wi-Fi network and video stream.

:::danger
AP FPV is alpha software. Test the full link on the ground before using it on a moving vehicle or aircraft.
:::

## Requirements

VTX side:

- OpenIPC-compatible camera or video transmitter board.
- Supported Wi-Fi adapter or module, commonly RTL8812AU, RTL8812EU, or RTL8733BU.
- Firmware image that matches the exact SoC and flash layout.

Viewer or ground station side:

- Android device with PixelPilot, or
- computer with Wi-Fi and a web browser, or
- any device that can receive an RTP/UDP video stream on port `5600`.

## Install AP FPV firmware

If the VTX has internet access, install the SSC338Q NOR AP FPV image with:

```bash
sysupgrade -k -r -n --url=https://github.com/OpenIPC/builder/releases/download/latest/openipc.ssc338q-nor-apfpv.tgz
```

:::caution
The example image is for SSC338Q NOR targets. Do not install it on a different SoC or flash layout. For other hardware, use [OpenIPC Builder](/software-tools/openipc-builder/) or a matching release image.
:::

After the upgrade completes, the VTX reboots automatically. Disconnect Ethernet if the Wi-Fi AP stream does not start as expected.

For offline installation, see [Installation](/use-cases/ap-fpv-over-wi-fi/installation/).

## Connect to the VTX

After reboot, connect your phone, computer, or ground station to the VTX Wi-Fi network:

```text
SSID: OpenIPC
Password: 12345678
VTX IP: 192.168.0.1
Expected viewer IP: 192.168.0.10
Network: 192.168.0.0/24
```

## View video

Android:

- Open PixelPilot.
- The stream should appear automatically when connected to the AP FPV network.

Browser:

- Open `http://192.168.0.1`.
- Use the OpenIPC Web UI to view or adjust the stream.

Linux/GStreamer:

```bash
gst-launch-1.0 udpsrc port=5600 ! application/x-rtp ! rtph265depay ! avdec_h265 ! fpsdisplaysink sync=false
```

## Next steps

- Change SSID, password, channel, or transmit power in [Network Configuration](/use-cases/ap-fpv-over-wi-fi/network-configuration/).
- Use multiple receiver Wi-Fi adapters with [Ground Stations](/use-cases/ap-fpv-over-wi-fi/ground-stations/).
- Add adaptive bitrate fallback with [APALink](/use-cases/ap-fpv-over-wi-fi/apalink/).
