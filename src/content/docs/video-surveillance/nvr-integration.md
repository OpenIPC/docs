---
title: NVR Integration
description: Connect OpenIPC cameras to NVR and monitoring systems.
---

After an OpenIPC camera is booting reliably and Majestic is producing video, the next step is to connect it to an NVR, VMS, or monitoring system.

## Typical Integration Path

1. Give the camera a stable IP address or DHCP reservation.
2. Verify the Web UI and SSH access.
3. Verify the RTSP stream from another machine.
4. Add the camera to the NVR using the camera IP, stream path, credentials, and RTSP port.
5. Confirm recording, playback, and reconnect behavior.

## What to Verify First

Before adding the camera to an NVR, verify locally:

- video starts after reboot;
- the camera keeps the same network address;
- the stream uses a codec supported by the NVR;
- bitrate and frame rate are stable enough for the network and recorder;
- time and timezone are correct if recordings depend on timestamps.

## Stream Settings

Use [Streams and Majestic](/video-surveillance/streams-and-majestic/) to configure RTSP, codec, bitrate, frame rate, snapshots, audio, and motion detection.

For conservative compatibility, start with H.264 and moderate bitrate. Increase quality only after the NVR records and reconnects correctly.

## NVR Hardware

OpenIPC also documents NVR-like hardware in the hardware section, including [NVR HI3536DV100](/hardware/sbcs/nvr-hi3536dv100/). That page is hardware-specific; this page is about connecting regular OpenIPC cameras to recording systems.

## Troubleshooting

### NVR Does Not Connect

Check camera IP, credentials, RTSP port, firewall rules, and whether the stream works from a player on the same network.

### Stream Connects but Drops

Lower bitrate and frame rate, test H.264 first, and check whether the network or NVR CPU is overloaded.

### Recording Time Is Wrong

Check camera time, timezone, NTP, and the recorder's time settings.

## Related Pages

- [Streams and Majestic](/video-surveillance/streams-and-majestic/)
- [Majestic](/system-components/majestic/)
- [NVR HI3536DV100](/hardware/sbcs/nvr-hi3536dv100/)
