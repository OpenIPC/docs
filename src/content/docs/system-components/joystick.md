---
title: Joystick
description: Use a USB joystick or RC transmitter as a MAVLink RC channel source for OpenIPC FPV ground stations.
---

OpenIPC includes an experimental `rcjoystick` utility for using a USB joystick or an RC transmitter in USB joystick mode as an RC input source.

The tool reads Linux joystick events and sends MAVLink 2 [`RC_CHANNELS_OVERRIDE`](https://mavlink.io/en/messages/common.html#RC_CHANNELS_OVERRIDE) packets to the telemetry endpoint, commonly `127.0.0.1:14650` on the recorder. This allows more direct channel forwarding than some ground station joystick integrations, including support for up to 18 MAVLink RC channels.

:::note
The original setup notes are maintained in the OpenIPC sandbox repository: [rcjoystick.md](https://github.com/OpenIPC/sandbox-fpv/blob/master/rcjoystick.md).
:::

## When to use it

Use `rcjoystick` when you want the ground station or recorder to forward joystick axes and buttons directly to the flight controller through MAVLink instead of relying on Mission Planner or QGroundControl joystick handling.

Typical use cases:

- USB RC transmitter connected to an OpenIPC ground station.
- USB joystick connected to a recorder with Linux joystick support.
- Forwarding RC channels to `telemetry_tx` or another MAVLink endpoint such as `mavlink-routerd`.
- Injecting a basic RSSI-like value into a selected RC channel.

## Command-line options

The utility exposes its options through `rcjoystick -h`:

```text
Usage:
 [-v] verbose;
 [-d device] default /dev/input/js0;
 [-a addr] ip address send to, default 127.0.0.1;
 [-p port] udp port send to, default 14650;
 [-t time] update RC_CHANNEL_OVERRIDE time in ms, default 50;
 [-x axes_count] 2..9 axes, default 5, other channels mapping to js buttons from button 0;
 [-r rssi_channel] store rx packets per second value to this channel, default 0 (disabled);
 [-i interface] wlan interface for rx packets statistics, default wlan0;
```

## Setup summary

The recorder needs a kernel and root filesystem with USB HID joystick support. On newer builds the `hid-generic` module is loaded automatically.

A typical setup flow is:

1. Copy the `rcjoystick` binary to `/usr/bin` on the recorder.
2. Make it executable:

   ```bash
   chmod +x /usr/bin/rcjoystick
   ```

3. Reboot the recorder.
4. Connect the RC transmitter or joystick over USB.
5. Test in verbose mode:

   ```bash
   rcjoystick -v
   ```

If everything is working, joystick axis and switch changes should appear in the console output. In QGroundControl, check **Analyze Tools → MAVLink Inspector → RC_CHANNELS_RAW** to confirm that RC channel values are changing.

For persistent startup, create an init service and make sure it starts after `wifibroadcast`.

## RSSI channel injection

`rcjoystick` can also write received packet statistics into a selected RC channel. This can be used as a simple RSSI-like indicator.

Example:

```bash
rcjoystick -r 16 -i wlan0
```

If the WFB interface is not `wlan0`, replace it with the correct interface name.

On the flight controller side, configure RSSI from RC channel 16, adjusting the high value to match your normal packet rate:

```text
RSSI_TYPE 2
RSSI_CHANNEL 16
RSSI_CHAN_LOW 0
RSSI_CHAN_HIGH 800
```

## Known limitation

The upstream note mentions short freezes when both sticks are moved aggressively in all directions. The issue appears to be related to missing events from the joystick driver. The workaround described there is to use an SBUS-to-USB HID joystick bridge based on Arduino Pro Micro.

## Source

- [OpenIPC sandbox-fpv: rcjoystick.md](https://github.com/OpenIPC/sandbox-fpv/blob/master/rcjoystick.md)
- [MAVLink RC_CHANNELS_OVERRIDE](https://mavlink.io/en/messages/common.html#RC_CHANNELS_OVERRIDE)
