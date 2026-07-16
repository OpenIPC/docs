---
title: Firmware Updates
description: A guide on how to update your camera.
---

Use this page when OpenIPC is already installed and the camera boots normally.
For first-time installation or recovery, follow the guide for your exact device
or SoC instead.

## Before updating

- Confirm that the device is running OpenIPC.
- Keep stable power connected during the whole update.
- Note the current firmware target and version.
- Back up any custom configuration that is important for your setup.
- Make sure the camera can reach GitHub if you plan to use the Web UI update
  button.

## Update from the Web UI

1. Open the camera Web UI in your browser.
2. Sign in if the interface asks for credentials.
3. Open **Settings -> Firmware** or **Firmware -> Update**.
4. Select **Install update from GitHub**.
5. Wait for the update process and automatic reboot to finish.

The update can take several minutes. Do not power off the camera while firmware
is being written.

## Firmware Release Sources

Ready-made OpenIPC firmware images are published in the [OpenIPC firmware latest release](https://github.com/OpenIPC/firmware/releases/tag/latest). Device-specific and customized images for known hardware are published from [OpenIPC Builder latest releases](https://github.com/OpenIPC/builder/releases/tag/latest). Use the image that matches the exact SoC, flash layout, and board profile for your device.

## After updating

- Refresh the Web UI and check the reported firmware version.
- Verify video streaming and any required integrations.
- Reapply custom settings only if they were not preserved.
- If the camera does not boot, use the recovery method documented for your
  hardware.
