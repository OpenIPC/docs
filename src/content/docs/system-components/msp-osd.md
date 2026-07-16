---
title: MSP OSD
description: MSP DisplayPort OSD renderer and telemetry helper for OpenIPC FPV.
---

MSP OSD is the OpenIPC implementation of MSP DisplayPort OSD for Betaflight, INAV, and ArduPilot. It receives MSP data from a flight controller and can render OSD elements over the OpenIPC video stream.

![MSP OSD overlay on an FPV video feed](/images/msp-osd-overlay.webp)

## Main Functions

MSP OSD can read MSP from a serial port, draw the OSD over video, limit display refresh rate, draw an artificial horizon indicator, forward aggregated MSP messages over UDP, watch WFB logs for link errors, and read SoC temperature for on-screen diagnostics.

It can also monitor RC channel values and run a `channels.sh` script when configured channels change. That makes it possible to trigger camera-side actions from the radio transmitter, such as changing encoder settings or switching modes, if the script is implemented for the aircraft.

## VTX Menu and Recording Support

The project includes a VTX menu system configured by `vtxmenu.ini`, with pages, options, and commands represented in an INI file. It also documents a safeboot stick command that can restore known-good configuration files and reboot.

MSP OSD can record DisplayPort messages to sidecar OSD files for later overlay and can create SRT files for extra messages. The repository notes that this mode expects recordings in a flat directory layout.

## Installation Notes

The release area provides prebuilt binaries for several targets, including SigmaStar, Goke, HiSilicon, and x86. Font files need to match the flight-controller firmware and video resolution; newer builds can auto-select among INAV, Betaflight, and ArduPilot font sets when the files are present.

## Sources

- [MSP OSD repository](https://github.com/OpenIPC/msposd)
- [MSP OSD releases](https://github.com/OpenIPC/msposd/releases)
