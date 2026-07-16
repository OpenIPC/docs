---
title: FAQ
sidebar:
  order: 9
description: Common AP FPV over Wi-Fi questions.
---

## What does AP FPV mean?

AP FPV means Access Point FPV. The VTX creates a regular Wi-Fi access point, and the viewer connects directly to it to receive live video.

## What is the video delay?

Expect about 40-70 ms. The exact delay depends on distance, interference, receiver performance, video settings, and decoding path.

## Can I use professional Wi-Fi equipment?

Yes. Outdoor Wi-Fi gear, directional antennas, and better receivers can improve range and stability. Always test the actual setup before relying on it.

## Is AP FPV a replacement for WFB-NG?

No. AP FPV is simpler and works with ordinary Wi-Fi clients, but it does not provide WFB-NG style link aggregation or the same behavior under weak signal conditions.

## Can I use a phone as the receiver?

Yes. Connect the phone to the VTX Wi-Fi network and use PixelPilot on Android, or open the Web UI if browser playback is suitable for your setup.

## Can I change the default SSID and password?

Yes. Use `fw_setenv wlanssid` and `fw_setenv wlanpass`, then reboot. See [Network Configuration](/use-cases/ap-fpv-over-wi-fi/network-configuration/).

## What hardware is supported?

The VTX must be supported by OpenIPC and have a compatible Wi-Fi adapter. Common Wi-Fi chips include RTL8812AU, RTL8812EU, and RTL8733BU. Use firmware that matches the exact SoC and flash layout.
