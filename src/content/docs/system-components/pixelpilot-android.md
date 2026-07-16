---
title: PixelPilot Android
description: Android OpenIPC FPV receiver for WFB-NG H.264/H.265 video feeds.
---

PixelPilot for Android packages the components needed to receive and decode an H.264/H.265 video feed broadcast by WFB-NG. The app is intended for Android devices connected to supported USB Wi-Fi adapters.

![PixelPilot Android video and OSD interface](/images/pixelpilot-android-osd.webp)

## Components and Compatibility

The repository credits FPVue Android, the `devourer` userspace RTL8812AU driver, LiveVideo10ms, and WFB-NG as major building blocks. It supports `arm64-v8a` and `armeabi-v7a` Android devices, and the README lists Meta Quest 2 and Meta Quest 3 in non-VR mode among compatible device classes.

The default WFB-NG ground-station key is embedded in the app, but the settings menu can select a different key from the phone. Supported RTL8812AU adapter USB IDs are maintained in the app's USB device filter.

## Features and Limits

The repository documents DVR saving to Android internal Movies storage and an audio playback feature for Opus streams from Majestic, with matching camera-side audio settings. It also includes an Auto-FEC reference for adjusting redundancy from the app.

The README warns that performance depends heavily on Android device processing power and lists audio stream support under known issues, so test the exact device and firmware combination before relying on it for field use.

## Sources

- [PixelPilot Android repository](https://github.com/OpenIPC/PixelPilot)
- [PixelPilot Android releases](https://github.com/OpenIPC/PixelPilot/releases)
