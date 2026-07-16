---
title: Radxa Zero 3W/3E
description: Hardware notes, firmware images, and related resources for Radxa Zero 3W/3E in OpenIPC ground-station builds.
sidebar:
  order: 40
---

Radxa Zero 3W and Radxa Zero 3E are compact SBCs commonly used as OpenIPC FPV ground-station hardware. Use this page for board-level notes, image choices, enclosure links, and related hardware resources.

For the practical WFB-NG setup flow, see [Ground Station on Radxa Zero 3W](/use-cases/fpv-over-wfb-ng/groundstation-radxa-zero-3w/).

## Recommended Use

Radxa Zero 3W/3E works well for a dedicated OpenIPC receiver when you want:

- HDMI output for goggles or a monitor;
- USB Wi-Fi adapters for WFB-NG reception;
- DVR and media-server features on the ground station;
- a small board that can be mounted in a custom enclosure.

Use at least 2 GB RAM, with 4 GB preferred. Use at least 8 GB eMMC or SD storage, with 16 GB preferred for DVR and easier updates.

## Firmware Image Options

Use the [latest OpenIPC SBC Ground Station release page](https://github.com/OpenIPC/sbc-groundstations/releases/tag/latest) as the main entry point for Radxa Zero 3 firmware. For current Buildroot images, follow the Buildroot Edition link to the `buildroot-snapshot` release and use the `radxa_zero3_*` files.

Older Stock Edition images are still linked from the same release page for existing installations, including `zero3w-v1.9.9`, `zero3w-v2.0.0-beta2`, and `zero3w-apfpv-v0.0.1`.

Related image projects:

- [OpenIPC SBC groundstations](https://github.com/OpenIPC/sbc-groundstations) is the current unified Buildroot-based OpenIPC ground-station image builder.
- [JohnDGodwin/zero3w-gs](https://github.com/JohnDGodwin/zero3w-gs) provides overlay files and an installation script for RadxaOS SDK based ground-station images.
- [zhouruixi/SBC-GS](https://github.com/zhouruixi/SBC-GS) is an alternative Radxa Zero 3 ground-station project with its own configuration layout and release images.

## Ground-Station Capabilities

Radxa-based OpenIPC ground-station images can provide:

- WFB-NG receiver services;
- PixelPilot, FPVue, or GStreamer video paths depending on the image;
- DVR storage and media access;
- Wi-Fi adapter hot-plug handling;
- WFB key storage and configuration partitions;
- button and keyboard controls;
- LED status, fan control, USB gadget, Wi-Fi, Ethernet, and USB tethering features depending on the image.

Exact features depend on the image branch and release. Check the release notes before flashing.

## Enclosures

Community enclosure models:

- [OpenIPC VRX Enclosure](https://www.printables.com/model/1051224-openipc-vrx-enclosure)
- [OpenIPC Radxa GS Case](https://www.printables.com/model/967795-openipc-radxa-gs-case)
- [Another OpenIPC Radxa GS Case](https://www.printables.com/model/979788-another-openipc-radxa-gs-case)
- [OpenIPC GS Case V1](https://www.printables.com/model/1034290-openipc-gs-case-v1)
- [A Case for the OpenIPC GS](https://www.printables.com/model/988543-a-case-for-the-openipc-gs)
- [Radxa Zero 3W GS Box](https://www.printables.com/model/822826-radxa03w-gs_box)
- [OpenIPC Radxa Zero 3W HDMI Ground Station](https://www.printables.com/model/1020246-openipc-radxa-zero-3w-hdmi-ground-station)
- [Radxa Zero 3W Case for OpenIPC](https://www.printables.com/model/1054879-radxa-zero-3w-case-for-openipc)
- [OpenIPC VRX Case on Thingiverse](https://www.thingiverse.com/thing:6680584)
- [OpenIPC Radxa Zero 3W HDZero Rail Mount](https://www.printables.com/model/811132-openipc-radxa-zero-3w-hdzero-goggle-case-rail-moun/files)
- [iSpy Another OpenIPC VRX](https://www.printables.com/model/1196394-ispy-another-openipc-sbc-vrx-case)
- [The Crown](https://www.printables.com/model/1233920-the-crown-radxa-sbc-openipc-ground-station-3x-eu2)
- [Radxa Zero 3W OpenIPC](https://www.printables.com/model/1086989-radxa-zero-3w-openipc)
- [OpenIPC GS Radxa zero VRX Case](https://www.printables.com/model/1109931-openipc-gs-radxa-zero-vrx-case)
- [OpenIPC Radxa Zero 3W VRX case](https://www.printables.com/model/1238633-openipc-radxa-zero-3w-vrx-case-3x-eu-rx-cards-w-hd)
- [OpenIPC Ruby_FPV GS Radxa zerro 3w based](https://www.printables.com/model/1238753-openipc-ruby_fpv-gs-radxa-zerro-3w-based)
- [ORV2](https://github.com/PaddyP90/ORV2)

## Where to Buy

- [Radxa Zero 3W](https://radxa.com/products/zeros/zero3w/#buy)
- [AliExpress](https://www.aliexpress.us/item/3256807428419499.html)

## Related Pages

- [WFB-NG Ground Station on Radxa Zero 3W](/use-cases/fpv-over-wfb-ng/groundstation-radxa-zero-3w/)
- [OpenIPC SBC Ground Stations](/software-tools/sbc-groundstations/)
- [PixelPilot RK](/system-components/pixelpilot-rk/)
- [Adaptive Link](/system-components/adaptive-link/)
- [Radxa Getting Started](https://wiki.radxa.com/Zero/getting_started)
- [RubyFPV Hardware](https://rubyfpv.com/hardware.php)
