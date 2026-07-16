---
title: Adaptive Link
description: Link profile selector for OpenIPC FPV video bitrate and Wi-Fi rate adaptation.
---

Adaptive Link adjusts OpenIPC FPV video and wireless link settings according to link quality. The repository describes a ground-station process that monitors RSSI and SNR, computes link quality scores, sends those scores to the air unit, and lets the air-unit process choose an appropriate transmit profile.

## How It Works

The ground station side, `alink_gs`, watches receive statistics and normalizes RSSI/SNR into scores. The camera side, `alink_drone`, receives those scores and selects a profile from `/etc/txprofiles.conf` when its timing and hysteresis rules allow a change.

Profiles can include Wi-Fi guard interval, MCS, FEC values, video bitrate, GOP, transmit power, ROI QP settings, channel bandwidth, and QP delta. The repository warns that transmit power values must be chosen carefully for the actual hardware.

## Configuration Files

The upstream README identifies these main configuration files:

- `/config/alink_gs.conf` on the ground station for score ranges and weighting.
- `/etc/alink.conf` on the camera for fallback behavior, timing, hysteresis, and command templates.
- `/etc/txprofiles.conf` on the camera for the link and video profiles selected by score.

## Installation Notes

Recent SigmaStar OpenIPC FPV firmware is described as including Adaptive Link, though it may not be enabled by default. The upstream README also documents manual drone and Radxa ground station installation commands. Recent Radxa ground station images may already include it, depending on the image used.

## Sources

- [Adaptive Link repository](https://github.com/OpenIPC/adaptive-link)
- [Radxa Zero 3 W/E](/hardware/sbcs/radxa-zero-3w-3e/)
