---
title: HiSilicon GK7205v200 / GK7205v300
description: Camera target notes for GK7205v200 and GK7205v300 OpenIPC devices.
---

GK7205v200 and GK7205v300 are Goke/HiSilicon-family camera SoCs listed in the OpenIPC supported SoC documentation. Use this page as the camera-family entry point until more board-specific pages are added.

:::note
SoC support does not guarantee that every sensor, board layout, or flash layout is supported. Confirm the exact device before flashing.
:::

## Sensor Notes

The [Supported SoC](/video-surveillance/soc/) page lists sensor drivers associated with GK7205 variants. Examples include sensors such as IMX307, IMX327, IMX335, OS05A, OV2718, SC223x, SC2335, SC3235, SC3335, SC4236, and SC500AI depending on the specific SDK target.

Board vendors can relabel sensors or use different wiring, so treat the SoC/sensor list as a starting point rather than a complete compatibility promise.

## Firmware and Recovery

Before flashing:

- identify flash type and size;
- save the original firmware if possible;
- prepare UART and TFTP access;
- use firmware generated for the exact SoC and flash layout.

Related recovery pages:

- [Firmware & Recovery](/firmware-recovery/)
- [General UART Flashing Guide](/firmware-recovery/general-uart-flashing-guide/)
- [Web-Based Camera Recovery Tool](/firmware-recovery/defib/)

## Related Pages

- [Video Surveillance](/video-surveillance/)
- [Streams and Majestic](/video-surveillance/streams-and-majestic/)
- [Majestic](/system-components/majestic/)
