---
title: Network Configuration
sidebar:
  order: 5
description: Change AP FPV SSID, password, Wi-Fi frequency, and transmit power.
---

AP FPV stores Wi-Fi settings in the boot environment. Change them over UART or SSH, then reboot the VTX.

## Change SSID and password

```bash
fw_setenv wlanssid VTX
fw_setenv wlanpass openipcfpv
```

Replace `VTX` with the desired network name and `openipcfpv` with the desired password.

## Change Wi-Fi frequency

```bash
fw_setenv wlanfreq 5700
```

Set a valid 2.4 GHz or 5 GHz frequency supported by the Wi-Fi adapter and local regulations.

## Change transmit power

```bash
fw_setenv wlanpwr 2000
```

:::caution
Be careful with transmit power. Excessive values can overheat or damage hardware, violate local regulations, or reduce link quality.
:::

## Apply changes

Reboot after changing environment variables:

```bash
reboot
```

## Mental model

Think of AP FPV like this:

- VTX: Wi-Fi access point and video source, usually `192.168.0.1`.
- Ground station: receiver device, often `192.168.0.10`.
- Video stream: RTP/UDP data from VTX to receiver.
- Web UI: camera control page at `http://192.168.0.1`.
