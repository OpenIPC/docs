---
title: Firmware & Recovery
description: Install, update, and recover OpenIPC firmware safely.
---

Use this section when you need to install OpenIPC, update an already working camera, or recover a device that no longer boots normally.

:::caution
Firmware operations can brick a camera if the image, flash layout, power, or bootloader commands are wrong. Keep UART access and a recovery path ready before changing production devices.
:::

## Choose the Right Path

- Camera boots normally and already runs OpenIPC: use [Firmware Updates](/firmware-recovery/firmware-updates/) or [Sysupgrade](/firmware-recovery/online-sysupgrade/).
- First-time install through bootloader: use [General UART Flashing Guide](/firmware-recovery/general-uart-flashing-guide/).
- Browser-based or automated recovery: use [Web-Based Camera Recovery Tool](/firmware-recovery/defib/).
- SigmaStar bootloader recovery: use [Unbrick: SigmaStar](/firmware-recovery/unbrick-sigmastar/).
- Ingenic T31 SD-card recovery: use [Unbrick: Ingenic](/firmware-recovery/unbrick-ingenic/).

## Firmware Sources

Use firmware images from:

- [OpenIPC firmware latest release](https://github.com/OpenIPC/firmware/releases/tag/latest)
- [OpenIPC Builder latest release](https://github.com/OpenIPC/builder/releases/tag/latest)

Match the firmware to the exact SoC, flash type, flash size, and board profile.

## Recovery Checklist

Before writing flash:

- identify the SoC and flash layout;
- save any existing dump if possible;
- prepare UART and TFTP tools;
- verify `serverip`, `ipaddr`, and image filenames;
- use stable power;
- run bootloader commands line by line.
