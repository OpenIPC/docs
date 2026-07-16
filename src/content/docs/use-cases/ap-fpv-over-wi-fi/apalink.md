---
title: APALink
sidebar:
  order: 7
description: Use APALink to keep an AP FPV video link alive with bitrate fallback.
---

APALink is an external C utility designed to keep an AP FPV video link usable under changing RF conditions. It can switch to a lower bitrate when signal strength becomes weak.

## What it does

APALink monitors the link and applies fallback logic. For example, it can reduce video bitrate to `2 Mbps` when the signal drops below a configured threshold.

## Installation summary

1. Open the APALink source repository: [CaraSandbox](https://github.com/carabidulebabat/CaraSandbox).
2. Follow the README in that repository.
3. Copy the `ap_alink` binary to `/usr/bin`.
4. Copy `ap_alink.conf` to `/etc/`.
5. Optionally copy `vtxmenu.ini` to `/etc/` to enable an AP FPV menu.

Make the binary executable:

```bash
chmod +x /usr/bin/ap_alink
```

## Configuration

Edit `/etc/ap_alink.conf`:

```text
bitrate_max=22
bitrate_min=2
dbm_threshold=-47
```

Settings:

- `bitrate_max`: bitrate used under good signal conditions.
- `bitrate_min`: fallback bitrate used under weak signal conditions.
- `dbm_threshold`: signal threshold where fallback starts.

A lower threshold keeps higher image quality for longer, but may increase lag or freezes under weak signal. A higher threshold triggers fallback sooner, usually reducing lag at the cost of image quality.

## Example settings

BL-M8812EU2:

```text
bitrate_max=12
bitrate_min=2
dbm_threshold=-52
```

BL-R8812AF1:

```text
bitrate_max=10
bitrate_min=2
dbm_threshold=-48
```

## VTX menu

With `vtxmenu.ini`, AP FPV settings can be exposed through an MSP-style menu. Typical items include:

- TX power: min/max presets such as `1500` or `2000`.
- Channel: available 5 GHz Wi-Fi channels.
- Auto power: enable or disable automatic TX power behavior.
