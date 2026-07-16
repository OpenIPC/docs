---
title: Link Tuning
sidebar:
  order: 8
description: Tune WFB-NG bitrate, channel width, presets, and Adaptive Link behavior.
---

Tune the link only after the basic WFB-NG setup works reliably. Changing MCS, FEC, channel width, bitrate, or power on unstable hardware makes troubleshooting much harder.

## Start from presets

Use OpenIPC Companion presets first. They provide known combinations for WFB-NG and camera settings and are safer than editing every field manually.

## Fixed profile tuning

A typical conservative baseline is:

- bitrate: 4 Mbps;
- channel width: 20 MHz;
- MCS: 1;
- FEC: 8/12;
- guard interval: long.

This is not the highest quality profile, but it is a reasonable baseline for testing.

## Adaptive Link

[Adaptive Link](/use-cases/fpv-over-wfb-ng/install-adaptive-link/) can switch profiles automatically based on RSSI and SNR. Use it when you already understand the base link behavior and want automatic fallback between quality and range profiles.

## Bitrate calculator

Use the [WFB-NG Bitrate Calculator](/use-cases/fpv-over-wfb-ng/wfb-ng-calculator/) to estimate combinations of bitrate, channel width, FEC, and MCS before applying settings to hardware.

## 40 MHz warning

Do not enable 40 MHz mode on adapters that do not support it. EU-based adapters cannot transmit in 40 MHz mode, and some BU-based adapters have the same limitation. See [EU/BU 40 MHz Issue](/use-cases/fpv-over-wfb-ng/eu-bu-40mhz-issue/).
