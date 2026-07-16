---
title: OpenIPC Configurator
description: Configuration utility for OpenIPC FPV, URLLC, camera, NVR, and Radxa devices.
---

OpenIPC Configurator is a setup utility for OpenIPC FPV and URLLC devices. The repository describes workflows for connecting to a camera, NVR, or Radxa Zero 3W, downloading current settings, editing them, saving the result, and rebooting the target device.

## Application Options

The original Windows workflow relies on PuTTY and `Configurator.exe`. The same repository now also ships a cross-platform .NET command-line interface and an Avalonia-based GUI for Linux, Windows, and macOS.

The cross-platform GUI mirrors the tabbed configuration workflow and covers device management, basic settings, video settings, Wi-Fi settings, connection status, progress feedback, and remembering recently used device IP addresses.

![OpenIPC Configurator running on Windows](/images/openipc-configurator-windows.webp)

## CLI Scope

The CLI can download and upload configuration, choose device profiles such as `openipc`, `nvr`, or `radxa`, and work with YAML-based wireless configuration. The repository also documents maintenance commands for key material, UART, MSP extras, service restarts, firmware offline upgrade, recording, audio, MAVLink, video tuning, Radxa reset, camera factory reset, PixelPilot installation, and Adaptive Link deployment.

## Sources

- [OpenIPC Configurator repository](https://github.com/OpenIPC/configurator)
- [Configurator manual setup notes](https://github.com/OpenIPC/configurator/blob/master/README-manual.md)
