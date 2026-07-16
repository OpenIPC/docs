---
title: Air Unit Setup
sidebar:
  order: 4
description: Connect, update, and prepare an OpenIPC FPV air unit for WFB-NG.
---

With current plug-and-play OpenIPC FPV builds, air-unit setup is mostly firmware update, safe bench setup, and final configuration through OpenIPC Companion or the VTX menu.

:::caution
Always attach antennas before powering Wi-Fi modules. Use external airflow when running air units on the bench.
:::

## Connect to the flight controller

Most OpenIPC air units sold for FPV use an HD-style connector. Connect the air unit to the flight controller in the same way as other digital FPV systems, following the air unit hardware page and pinout.

## Connect to a computer

1. Connect Ethernet or the USB debug port to the air unit.
2. Connect the other end to the computer.
3. Power the air unit from battery or USB debug port, depending on the hardware.
4. Configure the computer Ethernet interface as described in [OpenIPC Companion](/use-cases/fpv-over-wfb-ng/openipc-companion/).
5. Connect with OpenIPC Companion.

Default connection details are commonly:

| IP | Password |
| --- | --- |
| `192.168.1.10` | `12345` |

## Firmware update

Use the firmware tab in OpenIPC Companion. Select the firmware that matches the exact air unit hardware and update the device.

After the update, most air-unit configuration can be done through VTX menu or Companion presets.

## Power settings

Default power is usually pit mode or low power, such as 25 mW. Increase power only after the system is tested and cooled properly.

:::caution
Set RF power according to local regulations. Higher power can overheat adapters, draw more current, and make bench testing unsafe without airflow.
:::
