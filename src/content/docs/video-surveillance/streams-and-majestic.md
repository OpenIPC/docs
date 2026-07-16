---
title: Streams and Majestic
description: Configure and verify video streaming with Majestic on OpenIPC cameras.
---

Majestic is the main OpenIPC video streaming service for camera and surveillance use. It controls video streams, snapshots, RTSP, audio, OSD, night mode, motion detection, recording, and outgoing stream settings through `/etc/majestic.yaml`.

## Configuration File

The main configuration file is:

```text
/etc/majestic.yaml
```

A fuller reference configuration can be available on the device as:

```text
/etc/majestic.full
```

Use the Web UI for regular changes when possible. Use the file and CLI only when you need options that are not exposed in the interface.

## RTSP

RTSP is the standard path for NVR and surveillance integrations. In `majestic.yaml`, RTSP is controlled by the `rtsp` section:

```yaml
rtsp:
  enabled: true
  port: 554
```

After changing settings, restart or signal Majestic. On many OpenIPC builds, a HUP signal reloads the configuration:

```bash
killall -HUP majestic
```

## Video Parameters

Common primary stream settings live under `video0`:

```yaml
video0:
  enabled: true
  codec: h264
  fps: 20
  bitrate: 4096
  rcMode: vbr
```

Change one thing at a time and verify the stream before increasing bitrate, frame rate, or resolution.

## Snapshots and JPEG

Majestic can provide JPEG snapshots. The OpenIPC wiki documents image endpoint options such as:

```text
/image.jpg?width=640&height=360&qfactor=73&color2gray=1
```

Use snapshots for monitoring dashboards, thumbnails, and basic health checks.

## CLI Changes

The OpenIPC wiki shows the `cli` helper for changing settings from the shell:

```bash
cli -s .video0.codec h264
cli -s .video0.fps 10
killall -HUP majestic
```

Use CLI changes carefully on production cameras and keep a copy of the working configuration.

## Motion Detection

Majestic can call a script when motion is detected. The wiki documents this script path:

```text
/usr/sbin/motion.sh [count]
```

Example debug flow:

```bash
cli -s .motionDetect.enabled true
cli -s .motionDetect.debug true
killall majestic; sleep 3; majestic
```

## Troubleshooting

If Majestic crashes and the watchdog reboots the camera, collect logs from another machine before they are lost:

```bash
ssh root@192.168.1.10 "killall majestic; sleep 2; majestic" > majestic-$(date +"%F").log
```

Replace `192.168.1.10` with the actual camera address.

## Related Pages

- [Majestic](/system-components/majestic/)
- [NVR Integration](/video-surveillance/nvr-integration/)
- [Firmware Updates](/firmware-recovery/firmware-updates/)

## Sources

- [OpenIPC wiki: Majestic Streamer](https://github.com/OpenIPC/wiki/blob/master/en/majestic-streamer.md)
- [OpenIPC wiki: Majestic example config](https://github.com/OpenIPC/wiki/blob/master/en/majestic-config.md)
- [OpenIPC wiki: Troubleshooting Majestic](https://github.com/OpenIPC/wiki/blob/master/en/trouble-majestic.md)
