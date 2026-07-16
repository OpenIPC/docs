---
title: PixelPilot RK
description: Rockchip-based OpenIPC FPV video decoder and ground station display application.
---

PixelPilot RK is a WFB-NG video decoder for Rockchip-based ground stations. It receives RTP video, decodes it through the Rockchip MPP stack, and displays the feed with an on-screen display for link and decoder information.

![PixelPilot RK on-screen display and link statistics](/images/pixelpilot-rk-osd.webp)

## Hardware and Base Project

The repository says PixelPilot RK is based on Gee He's FPVue RK project. Upstream documentation lists RK3566, such as Radxa Zero 3W, and RK3588s, such as Orange Pi 5, as tested platforms.

## Features

PixelPilot RK documents these capabilities:

- GStreamer-based ingest with Rockchip MPP decoding.
- OSD with bandwidth, decode latency, frame rate, and WFB-NG link statistics.
- GPU color correction through EGL/GLES2.
- DVR re-encoding with the OSD blended into the recording.
- Frame pacing for re-encoding.
- Upside-down display support through DRM image flip.
- GSMenu for live ground-station control of air-unit and link settings.

## Installation and Configuration

The project can be installed from Debian packages for Bullseye and Bookworm or built from source on a Rockchip Linux system. Documented configuration files include `/etc/pixelpilot/pixelpilot.yaml`, `/etc/pixelpilot/osd_config.json`, and `/etc/default/pixelpilot`.

## Sources

- [PixelPilot RK repository](https://github.com/OpenIPC/PixelPilot_rk)
- [FPVue RK repository](https://github.com/gehee/FPVue_rk)
- [Rockchip MPP library](https://github.com/rockchip-linux/mpp)
