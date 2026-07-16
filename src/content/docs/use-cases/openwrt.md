---
title: OpenWrt
description: Use an OpenWrt router as a WFB-NG ground station for OpenIPC FPV.
---

OpenIPC provides an OpenWrt package set for running [WFB-NG](https://github.com/svpcom/wfb-ng) on router hardware. This allows an OpenWrt router to work as a lightweight WFB-NG ground station for OpenIPC FPV systems.

The project lives at [OpenIPC/wfb-ng-openwrt](https://github.com/OpenIPC/wfb-ng-openwrt).

:::caution
The OpenWrt WFB-NG package is not fully tested yet. Use it carefully and validate the link on the bench before flight.
:::

## When to Use It

Use the OpenWrt path when you want the receiver to be a router instead of a phone, SBC, or laptop. A router can be mounted higher or farther away from the pilot, for example on a roof or mast, and connected back to the viewing device over Ethernet, Wi-Fi, RNDIS, or another network path.

A dual-band OpenWrt router with USB is recommended. See the project's [tested devices](https://github.com/OpenIPC/wfb-ng-openwrt/wiki/0.-Tested-devices) page before choosing hardware.

## Package Options

The OpenWrt package exposes several build options:

- `wfb-rx`: installs the `wfb_rx` binary.
- `wfb-tx`: installs the `wfb_tx` binary.
- `wfb-keygen`: installs the `wfb_keygen` binary.
- `wfb-key`: installs the default key used by OpenIPC and Android FPVue, linked to `/etc/gs.key`.
- `wfb-gs`: installs the OpenWrt WFB ground-station scripts and configuration.

The `wfb-gs` option is the practical ground-station package. It sets the wireless adapter to monitor mode, receives data from the wireless interface, and forwards the stream to the device that decodes and displays video.

## Features

The package is designed to be compatible with OpenIPC FPV and supports:

- using the router's integrated wireless card instead of an external USB Wi-Fi adapter;
- 2.4 GHz and 5 GHz bands on dual-band routers;
- forwarding video and MAVLink over Ethernet, Wi-Fi, RNDIS, or other network paths;
- unicast mode with automatic destination switching between an Android phone over USB tethering and a PC on Ethernet or Wi-Fi;
- multicast mode for sending to Android over RNDIS and an SBC over Ethernet at the same time.

:::note
QGroundControl on Windows may not support multicast in the same way as other clients. Test the exact receiver application before relying on multicast.
:::

## Basic Configuration

OpenWrt settings are managed through UCI. After changing settings, commit the changes and reload the configuration.

### Set Channel

```bash
uci set wfb-gs.config.channel='36'
uci commit
reload_config
```

### Set Unicast Destination

This example sends the stream to `192.168.1.100` in unicast mode:

```bash
uci set wfb-gs.config.ip_pc='192.168.1.100'
uci set wfb-gs.config.mode='unicast'
uci commit
reload_config
```

### Edit the Config File

You can also edit the config file directly:

```text
/etc/config/wfb-gs
```

After saving the file, run:

```bash
reload_config
```

## Defaults

Default values from the package documentation:

| Setting | Default |
| --- | --- |
| Router IP | `192.168.1.1` |
| Config file | `/etc/config/wfb-gs` |
| Stream destination IP | `192.168.1.2` |
| Channel | `161` |
| Bandwidth | `20MHz` |

## Hardware Notes

A dual-band router with a supported wireless chipset is preferred. The integrated Wi-Fi card can be used for WFB-NG reception, which keeps the setup compact and avoids an external USB Wi-Fi adapter in some builds.

If you need a more traditional receiver setup, compare this path with:

- [FPV over WFB-NG](/use-cases/fpv-over-wfb-ng/)
- [Ground Station on Radxa Zero 3W](/use-cases/fpv-over-wfb-ng/groundstation-radxa-zero-3w/)
- [FPV over Wi-Fi (APFPV)](/use-cases/ap-fpv-over-wi-fi/)

## Planned Work

The upstream project lists these future ideas:

- use multiple routers to receive;
- receive from 2.4 GHz and 5 GHz bands simultaneously.

## Source

- [OpenIPC/wfb-ng-openwrt](https://github.com/OpenIPC/wfb-ng-openwrt)
