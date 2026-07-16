---
title: OpenIPC Builder
description: Firmware build scripts and custom image storage for known OpenIPC devices.
---

OpenIPC Builder is the project used for device-specific OpenIPC firmware builds. The repository describes it as an experimental Buildroot-based system for known devices and lists profiles for IP cameras and FPV air units, including OpenIPC AIO Mario, Thinker, UltraSight, OpenIPC URLLC, RunCam WiFiLink, and Emax Wyvern Link.

Use Builder when a supported device needs a customized image, device-specific GPIO or Wi-Fi setup, or firmware repacking with built-in network credentials. General firmware sources still live in the main [OpenIPC firmware repository](https://github.com/OpenIPC/firmware); Builder keeps per-device build profiles, customizer scripts, and release artifacts for known hardware.

## What It Provides

- Device profile handling through Builder's tweaker/customizer scripts.
- A release area for customized firmware images for known devices.
- QR-code based Wi-Fi provisioning support for devices where the feature fits in flash.
- Helper scripts such as `builder.sh` for preparing and using the build environment.
- A `repack.sh` workflow for embedding SSID and password values into an existing firmware image.

## FPV Relevance

For OpenIPC FPV, Builder is relevant when you need a firmware image for a known air unit rather than a generic firmware artifact. The Builder README lists several FPV devices as known profiles, including OpenIPC AIO Mario, Thinker, UltraSight, OpenIPC URLLC, RunCam WiFiLink, and Emax Wyvern Link.

## Sources

- [OpenIPC Builder repository](https://github.com/OpenIPC/builder)
- [OpenIPC firmware repository](https://github.com/OpenIPC/firmware)
- [OpenIPC Builder latest releases](https://github.com/OpenIPC/builder/releases/tag/latest)
