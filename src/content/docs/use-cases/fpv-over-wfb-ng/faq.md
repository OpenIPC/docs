---
title: FAQ
sidebar:
  order: 99
description: Common FPV over WFB-NG questions and links to the detailed guides.
---

## Where should I start?

Start with [Quick Start](/use-cases/fpv-over-wfb-ng/quick-start/). It covers the main hardware choices, air unit setup, ground-station options, and first flight path.

## Which Wi-Fi adapters should I use?

Use tested adapters from the hardware documentation. Untested adapters can cause breakups, unstable links, or unsupported channel-width modes.

## Is WFB-NG the same as AP FPV?

No. WFB-NG uses a Wi-Fi broadcast style link for FPV. [AP FPV over Wi-Fi](/use-cases/ap-fpv-over-wi-fi/) uses a regular access point style connection and is simpler, but has different link behavior and limitations.

## Where are advanced settings documented?

Use [OpenIPC Companion](/use-cases/fpv-over-wfb-ng/openipc-companion/) for OpenIPC Companion, Ethernet setup, firmware updates, presets, and VTX configuration.

## How do I build a ground station?

Use one of the ground-station guides:

- [Ground Station on Radxa Zero 3W](/use-cases/fpv-over-wfb-ng/groundstation-radxa-zero-3w/)
- [Ground Station on Ubuntu 22.04](/use-cases/fpv-over-wfb-ng/groundstation-ubuntu/)

## How do I improve link behavior?

Start with stable hardware and conservative WFB-NG settings. Then read [Installing Adaptive Link](/use-cases/fpv-over-wfb-ng/install-adaptive-link/) for automatic link-profile selection based on RSSI/SNR.

## My EU/BU-based VTX glitches in 40 MHz mode. What should I read?

Read [EU/BU 40 MHz Issue](/use-cases/fpv-over-wfb-ng/eu-bu-40mhz-issue/). Some EU-based cards cannot transmit in 40 MHz mode, and some BU-based cards have the same limitation.
