---
title: Companion
description: Official multi-platform configuration tool for OpenIPC cameras.
---

OpenIPC Companion is the official multi-platform configuration application for OpenIPC cameras. It is built with Avalonia UI and is intended to manage camera settings, telemetry, presets, and firmware updates from a desktop application.

![OpenIPC Companion WFB settings screen](/images/openipc-companion-wfb-settings.webp)

## Capabilities

The Companion repository documents support for camera settings such as resolution, frame rate, and exposure; real-time telemetry such as temperature, voltage, and signal strength; setup wizards for device and network configuration; and YAML-based configuration editing.

Desktop development builds can be run from the repository with .NET tooling. The repository also notes platform targets for Windows, macOS, Linux, Android, and iOS, while mobile builds are still described as in progress. NVR setup is not covered by Companion yet; the repository points users to OpenIPC Configurator for NVR support.

## Related Pages

- [FPV over WFB-NG quick start](/use-cases/fpv-over-wfb-ng/quick-start/)
- [FPV Presets](/software-tools/fpv-presets/)
- [OpenIPC Configurator](/software-tools/openipc-configurator/)

## Sources

- [OpenIPC Companion repository](https://github.com/OpenIPC/companion)
- [Companion presets documentation](https://github.com/OpenIPC/companion/blob/master/docs/presets.md)
