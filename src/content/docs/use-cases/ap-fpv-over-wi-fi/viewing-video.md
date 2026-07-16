---
title: Viewing Video
sidebar:
  order: 4
description: Receive AP FPV video on Android, desktop browsers, Linux, or other RTP-capable devices.
---

After AP FPV firmware boots, the VTX creates a Wi-Fi access point and sends video to the receiver network.

Default network details:

```text
SSID: OpenIPC
Password: 12345678
VTX IP: 192.168.0.1
Video target: 192.168.0.10
RTP/UDP port: 5600
```

## Android

Use PixelPilot when possible. Connect Android to the `OpenIPC` Wi-Fi network, then open PixelPilot. The stream should appear automatically.

## Browser

Connect to the AP FPV network and open:

```text
http://192.168.0.1
```

The OpenIPC Web UI can show live video and expose camera controls.

## Linux with GStreamer

Use this pipeline for H.265 RTP on UDP port `5600`:

```bash
gst-launch-1.0 udpsrc port=5600 ! application/x-rtp ! rtph265depay ! avdec_h265 ! fpsdisplaysink sync=false
```

## Other receivers

Any software or hardware that can receive RTP video over UDP can be used. For custom ground stations, make sure the receiver has the expected IP address or routing for the AP FPV stream.
