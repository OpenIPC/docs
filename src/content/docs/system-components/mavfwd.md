---
title: MAVFWD
description: Lightweight MAVLink serial-to-UDP forwarder for OpenIPC FPV telemetry.
---

MAVFWD is a small C utility for forwarding MAVLink telemetry between a serial port and UDP endpoints. The repository describes it as a way to carry one-way or bidirectional telemetry between an aircraft and a ground station through WFB-NG devices.

## Role in OpenIPC FPV

MAVFWD is included in OpenIPC FPV firmware as a lighter alternative to `mavlink-routerd` and is usually used on the air side, where the camera is connected to a flight controller UART.

It can parse MAVLink with the official MAVLink library, forward telemetry between a local serial master and remote UDP ports, aggregate packets into frames, inject supported SoC temperature into telemetry, and report WFB transmit drops as MAVLink messages when `wfb_tx` logging is available.

## RC Channel Hooks

MAVFWD can monitor MAVLink `RC_CHANNELS` data and call a `channels.sh` script when a configured channel changes. The script receives the channel number and value, allowing a setup to bind transmitter switches to camera-side actions such as changing encoder options, restarting Wi-Fi, or changing link parameters.

## Sources

- [MAVFWD repository](https://github.com/OpenIPC/mavfwd)
