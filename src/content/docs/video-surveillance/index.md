---
title: Video Surveillance
description: The primary OpenIPC path for building and operating IP surveillance cameras.
---

OpenIPC is first of all firmware for IP cameras and video surveillance. Start here when your goal is to turn a supported camera into a regular network camera for RTSP, ONVIF-style workflows, NVR integration, recording, or Majestic-based operation.

Other sections such as FPV, OpenWrt, home automation, and streaming are practical applications built on top of the same camera platform. They are useful, but they do not replace the standard video surveillance path.

## Recommended Path

1. Check that the camera SoC, sensor, flash type, and board layout are supported.
2. Install OpenIPC firmware using the matching recovery or flashing guide.
3. Complete first boot, set a strong password, and verify network access.
4. Configure Majestic, RTSP streams, snapshots, audio, OSD, and recording as needed.
5. Connect the camera to an NVR or monitoring system.
6. Keep recovery materials ready before changing firmware on production cameras.

## Core Pages

- [Quick Start](/video-surveillance/quick-start/)
- [Streams and Majestic](/video-surveillance/streams-and-majestic/)
- [NVR Integration](/video-surveillance/nvr-integration/)
- [Supported SoC](/video-surveillance/soc/)

## Related Documentation

- [Firmware Updates](/firmware-recovery/firmware-updates/)
- [Sysupgrade](/firmware-recovery/online-sysupgrade/)
- [General UART Flashing Guide](/firmware-recovery/general-uart-flashing-guide/)
- [Web-Based Camera Recovery Tool](/firmware-recovery/defib/)
- [Majestic](/system-components/majestic/)
- [OpenIPC Dashboard](/system-components/dashboard/)
