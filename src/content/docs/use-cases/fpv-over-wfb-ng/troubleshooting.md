---
title: Troubleshooting
sidebar:
  order: 12
description: Diagnose common WFB-NG setup, Wi-Fi adapter, and video-link issues.
---

Most WFB-NG problems come from hardware mismatch, unsupported Wi-Fi modes, incorrect firmware, unstable power, or overly aggressive link settings.

## No or poor video

1. Return to a conservative preset.
2. Confirm the air unit firmware matches the hardware.
3. Check that antennas are connected and undamaged.
4. Test at short range with clear line of sight.
5. Try another channel away from crowded Wi-Fi networks.
6. Confirm the ground station sees the expected Wi-Fi adapter.

## Frequent breakups

- Use tested Wi-Fi adapters.
- Avoid 40 MHz mode on unsupported adapters.
- Lower bitrate and MCS.
- Improve cooling and power delivery.
- Test with another OTG adapter if using Android/PixelPilot.

## Firmware update problems

Use [OpenIPC Companion](/use-cases/fpv-over-wfb-ng/openipc-companion/) to connect over Ethernet or USB debug port. Do not unplug power or Ethernet during firmware update, and wait a few seconds after the update reports completion.

## EU/BU 40 MHz issue

If an EU-based or some BU-based VTX stops working after enabling 40 MHz, read [EU/BU 40 MHz Issue](/use-cases/fpv-over-wfb-ng/eu-bu-40mhz-issue/).

## First flights

Do not push range or fly in a crowded RF environment on the first flights. Test the link on the ground, verify video stability, and stay inside the range you have already validated.
