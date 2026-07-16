---
title: Devourer
description: Userspace Realtek 802.11ac Wi-Fi driver for OpenIPC FPV and long-range digital video links.
---

Devourer is a userspace Wi-Fi driver for Realtek 802.11ac USB adapters. In OpenIPC FPV setups it is used for long-range digital video links where the software needs direct control over raw Wi-Fi frames.

The driver works through `libusb`, so supported adapters can be used without an out-of-tree kernel module or a DKMS driver tied to a specific kernel version.

## Role in OpenIPC

Devourer provides monitor-mode receive and packet injection through a library API. Applications can control frame parameters such as rate, bandwidth, guard interval, coding, STBC, TX power, and channel.

Because it runs in userspace, the same codebase can target Linux, macOS, Windows, and Android/Termux. This makes it useful for ground stations, experiments, and cross-platform tooling where vendor kernel drivers are difficult to maintain or not available.

## FPV Capabilities

Devourer is designed for radio-link experiments that need low-level control:

- Per-packet radiotap control for injected frames.
- Fast channel retuning for frequency hopping.
- 5 MHz and 10 MHz narrowband operation on supported Realtek generations.
- Hardware timestamp access for multi-radio timing work.
- Link-health and radio diagnostics such as signal telemetry and spectrum-related measurements.

These features make Devourer relevant to adaptive FPV video links, raw Wi-Fi broadcast experiments, and OpenIPC ground-station development.

## Supported Hardware

The upstream README lists multiple Realtek 802.11ac chip families, including RTL8812AU, RTL8814AU, RTL8822BU, RTL8811CU/RTL8821CU, RTL8812CU/RTL8822CU, RTL8812EU/RTL8822EU, and related variants. Several supported generations can operate in 5 MHz and 10 MHz channel modes.

Check the upstream hardware table before buying adapters or planning a build, because benchmark status and feature support vary by chipset and by the specific USB adapter design.

## Quick Start Notes

Devourer builds with CMake, a C++20 compiler, and `libusb-1.0`. The repository includes demo binaries such as:

- `rxdemo` for monitor-mode receive and per-frame signal telemetry.
- `txdemo` for packet injection and runtime radio configuration.
- `streamtx` and `duplex` for packet-link experiments.
- `txpower`, `sense`, and other examples for radio-control and sensing workflows.

Most demo configuration is exposed through environment variables, and the repository documents the full catalogue in `src/DeviceConfig.h`.

## Sources

- [Devourer repository](https://github.com/OpenIPC/devourer)
- [OpenIPC website](https://openipc.org/)
