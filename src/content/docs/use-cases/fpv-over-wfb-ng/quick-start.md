---
title: Quick Start
sidebar:
  order: 3
description: A short path for bringing up an OpenIPC FPV system over WFB-NG.
---

Use this page as the happy path. Follow the detailed pages when you need to choose hardware, update firmware, tune the link, or build a specific ground station.

:::caution
Use tested Wi-Fi adapters and conservative presets first. Untested adapters or unsupported channel-width modes can cause breakups and unpredictable link behavior.
:::

## 1. Choose tested hardware

Start with [Hardware Selection](/use-cases/fpv-over-wfb-ng/hardware-selection/). Pick:

- an OpenIPC-compatible air unit;
- a tested Wi-Fi adapter;
- a ground-station path: PixelPilot, Radxa Zero 3W/3E, Ubuntu, or another supported receiver.

## 2. Prepare the air unit

Follow [Air Unit Setup](/use-cases/fpv-over-wfb-ng/air-unit-setup/):

1. Connect the air unit to the flight controller.
2. Attach antennas before powering the Wi-Fi modules.
3. Connect the air unit to a computer over Ethernet or USB debug port.
4. Update firmware with [OpenIPC Companion](/use-cases/fpv-over-wfb-ng/openipc-companion/).
5. Use presets before changing low-level WFB-NG settings manually.

## 3. Prepare the ground station

Choose one path:

- [Ground Station on Radxa Zero 3W](/use-cases/fpv-over-wfb-ng/groundstation-radxa-zero-3w/)
- [Ground Station on Ubuntu 22.04](/use-cases/fpv-over-wfb-ng/groundstation-ubuntu/)
- PixelPilot on Android with a supported Wi-Fi adapter.

For Radxa hardware background and image options, see [Radxa Zero 3W/3E](/hardware/sbcs/radxa-zero-3w-3e/).

## 4. Verify the link before flying

Before the first flight:

1. Test at short range on the ground.
2. Confirm video is stable.
3. Confirm OSD and telemetry if used.
4. Check adapter temperature and power stability.
5. Stay on conservative bitrate and channel-width settings.

## 5. Tune after the basic setup works

After the link is stable, use:

- [Link Tuning](/use-cases/fpv-over-wfb-ng/link-tuning/)
- [Installing Adaptive Link](/use-cases/fpv-over-wfb-ng/install-adaptive-link/)
- [WFB-NG Bitrate Calculator](/use-cases/fpv-over-wfb-ng/wfb-ng-calculator/)

If something breaks, start with [Troubleshooting](/use-cases/fpv-over-wfb-ng/troubleshooting/).
