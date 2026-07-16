---
title: About the Project
description: What OpenIPC is, where it fits, and how to continue through the documentation.
---

## What is OpenIPC?

OpenIPC is an open source firmware project for supported IP camera hardware. It
replaces vendor firmware with a Buildroot-based Linux system and related camera
software so users can inspect, adapt, and maintain their devices when the
hardware is supported.

OpenIPC is used in several areas:

- IP camera and video surveillance deployments.
- FPV video links and ground-station projects.
- Home automation and camera-based experiments.
- Development and testing on supported camera SoCs.

Because camera hardware varies widely, OpenIPC documentation is organized around
hardware targets and practical use cases. Always match a guide to your exact SoC,
flash layout, and recovery method before installing firmware.

## Continue reading

- [Quick Start](/getting-started/quick-start/) - first checks before installing
  or updating a device.
- [Hardware](/hardware/) - board and device-specific notes.
- [Software](/software-tools/) - firmware updates, UART flashing, Web UI,
  and sysupgrade notes.
- [FPV](/use-cases/fpv-over-wfb-ng/quick-start/) - WFB-NG and related FPV setup paths.
- [Home Automation](/use-cases/home-automation/quick-start/) - integration-focused
  starting point.
- [Video Surveillance](/use-cases/video-surveillance/quick-start/) - general IP
  camera deployment notes.
