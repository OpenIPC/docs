---
title: Aviateur
description: Cross-platform OpenIPC FPV ground station application for desktop systems.
---

Aviateur is a desktop OpenIPC FPV ground station application for Linux, Windows, and macOS. It is based on the earlier [fpv4win](https://github.com/OpenIPC/fpv4win) work and is intended to let a PC or laptop receive and display an OpenIPC FPV feed.

![Aviateur OpenIPC FPV ground station interface](/images/aviateur-ground-station.webp)

## Current Limits

The Aviateur README documents several important limits: Windows builds do not support Adaptive Link, only RTL8812AU Wi-Fi adapters are listed as supported, and MAVLink support is not available in Aviateur.

## Platform Notes

On Windows, the repository instructs users to install a libusb driver for the Wi-Fi adapter with Zadig before running Aviateur. On Linux, access to the adapter may require a udev rule or root privileges. On macOS, the README currently describes building from source and launching the app from a terminal so environment variables are available.

## Build Dependencies

The source build uses CMake and submodules. Documented dependencies include libusb, FFmpeg, libsodium, OpenCV, Vulkan-related packages, and libpcap, with platform-specific setup instructions in the repository.

## Sources

- [Aviateur repository](https://github.com/OpenIPC/aviateur)
- [fpv4win repository](https://github.com/OpenIPC/fpv4win)
