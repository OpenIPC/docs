---
title: OpenIPC SBC Ground Stations
description: Buildroot-based image builder and firmware releases for OpenIPC FPV SBC ground stations.
---

OpenIPC SBC Ground Stations is the unified image builder for OpenIPC FPV receiver devices based on single-board computers. The upstream repository describes it as a Buildroot 2 based image builder for supported ground-station hardware.

The project is software tooling rather than a single hardware board: it builds images, boot scripts, bootloader files, root filesystems, and update packages for several receiver platforms.

## Supported Hardware

The upstream README lists support for:

- RunCam Wifilink.
- Emax Wyvern-Link.
- Radxa Zero 3 when used with one of the supported receiver options.
- OpenIPC Bonnet.

The `latest` release page also links to older or separate image tracks for Radxa Zero 3, Radxa Rock 2F, and Orange Pi 3B/5/5 Plus.

## Editions and Releases

The [latest release page](https://github.com/OpenIPC/sbc-groundstations/releases/tag/latest) is an index for available SBC Ground Station editions. It currently marks the Buildroot Edition as the community-recommended default for most users.

- [Buildroot snapshot](https://github.com/OpenIPC/sbc-groundstations/releases/tag/buildroot-snapshot) provides current Buildroot images and update packages for platforms such as `radxa_zero3`, `openipc_bonnet`, `runcam_wifilink`, and `emax_wyvern-link`.
- Stock Edition releases remain available for existing Radxa Zero 3 users, including [v1.9.9](https://github.com/OpenIPC/sbc-groundstations/releases/tag/zero3w-v1.9.9), [2.0.0 beta 2](https://github.com/OpenIPC/sbc-groundstations/releases/tag/zero3w-v2.0.0-beta2), and [APFPV v0.0.1](https://github.com/OpenIPC/sbc-groundstations/releases/tag/zero3w-apfpv-v0.0.1).
- Separate release pages are listed for [Orange Pi](https://github.com/OpenIPC/sbc-groundstations/releases/tag/Orange-Pi-Latest) and [Radxa Rock 2F](https://github.com/OpenIPC/sbc-groundstations/releases/tag/rock2f-v0.0.1).

## Flashing and Updates

For eMMC devices, the project documents an SD-card assisted flashing method. Copy `<platform>_sdcard.img` and `<platform>_boot.scr` from the same release to a FAT32 card, rename the boot script to `boot.scr`, and boot the device from that card. U-Boot writes the image to eMMC and then reboots into the flashed system.

Boards without eMMC can use a normal SD-card image flashed with a tool such as balenaEtcher.

Advanced methods include `dd` from a booted system, bootloader-only flashing, and maskrom flashing with RKDevTool or `rkdeveloptool`.

Once flashed, Buildroot images can be updated by copying the matching `<platform>.tar.gz` package to a FAT SD card, the DVR partition, or eMMC storage and rebooting. The README also documents `sysupgrade -u -r`, local `build.sh ssh-flash`, and local `build.sh flash` workflows.

## Runtime Features

The README documents factory reset through the right button during boot or the `firstboot` command.

It also describes gadget mode, triggered with the left button during boot. Through the OTG port, gadget mode exposes DVR access, serial access, and a network interface at `192.168.5.1`.

## Custom Builds

Custom builds require a Linux or WSL2 environment with Buildroot dependencies installed:

```sh
git clone https://github.com/OpenIPC/sbc-groundstations.git
cd sbc-groundstations
./build.sh
```

Use the upstream Buildroot documentation when customizing images or adding packages.

## Sources

- [OpenIPC SBC Ground Stations repository](https://github.com/OpenIPC/sbc-groundstations)
- [Latest SBC Ground Station releases](https://github.com/OpenIPC/sbc-groundstations/releases/tag/latest)
- [Buildroot snapshot release](https://github.com/OpenIPC/sbc-groundstations/releases/tag/buildroot-snapshot)
