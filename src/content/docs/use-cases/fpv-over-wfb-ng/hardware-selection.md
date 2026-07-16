---
title: Hardware Selection
sidebar:
  order: 2
description: Choose tested air units, Wi-Fi adapters, and ground-station hardware for WFB-NG.
---

Good WFB-NG performance starts with hardware selection. Use tested hardware first; untested Wi-Fi adapters and unsupported channel-width modes are the most common source of unstable links.

## Ground station choices

There are two common receiver paths:

- **SBC ground station**: a dedicated receiver based on an SBC such as Radxa Zero 3W/3E. This path supports more hardware options and is better for purpose-built goggles or HDMI displays.
- **PixelPilot**: an Android-based receiver path. It is usually easier to start with, but the supported Wi-Fi adapter and Android device combinations are narrower.

SBC ground stations can use RTL8812EU and RTL8812AU adapters. PixelPilot commonly uses RTL8812AU adapters and Snapdragon-based Android devices, including tested Meta Quest setups.

## Air unit choices

An air unit, or VTX, is the OpenIPC camera-side device that sends video to the ground station. It usually combines:

- image sensor;
- SoC;
- Wi-Fi transmitter.

Common sensor choices are IMX335 and IMX415. IMX335 generally offers stronger image quality and high-frame-rate modes such as 1080p120. IMX415 is also used, but typical high-performance modes are more limited.

Common SoC choices include SSC338Q and SSC30KQ. SSC338Q has more headroom and is usually the more future-proof choice for firmware updates and higher-performance modes.

## Wi-Fi adapters and channel width

RTL8812EU and RTL8812AU are common transmitter families. They are similar in many practical setups, but channel-width support matters.

:::caution
RTL8812EU does not support 40 MHz injection mode. Do not enable 40 MHz mode on EU-based cards. See [EU/BU 40 MHz Issue](/use-cases/fpv-over-wfb-ng/eu-bu-40mhz-issue/).
:::

## Related hardware pages

- [Radxa Zero 3W/3E](/hardware/sbcs/radxa-zero-3w-3e/)
- [Wi-Fi Adapters](/hardware/wi-fi-adapters/openipc/)
- [Air Units](/hardware/air-units/others/)
- [Ground Station on Radxa Zero 3W](/use-cases/fpv-over-wfb-ng/groundstation-radxa-zero-3w/)
