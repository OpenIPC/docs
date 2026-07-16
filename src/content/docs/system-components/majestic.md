---
title: Majestic
description: OpenIPC camera streamer for video surveillance, RTSP, snapshots, motion detection, and recording.
---

Majestic is the main OpenIPC camera streaming service. It is the core component behind the standard video surveillance workflow: live video, RTSP, snapshots, image settings, audio, OSD, night mode, motion detection, recording, and outgoing streams.

## Where It Fits

Use Majestic when you need to:

- expose an OpenIPC camera as an IP camera;
- provide RTSP streams to an NVR or VMS;
- adjust codec, frame rate, bitrate, and image parameters;
- enable snapshots, audio, OSD, or motion detection;
- troubleshoot stream crashes or camera watchdog resets.

## Configuration

The main configuration file is:

```text
/etc/majestic.yaml
```

A full example may be available as:

```text
/etc/majestic.full
```

Common sections include:

- `system`: web ports, log level, buffer, plugins;
- `isp`: sensor and image pipeline options;
- `image`: mirror, flip, rotation, contrast, saturation, luminance;
- `video0` and `video1`: stream enablement, codec, size, FPS, bitrate;
- `jpeg`: snapshot settings;
- `rtsp`: RTSP enablement and port;
- `audio`: microphone and speaker options;
- `nightMode`: IR cut, light, and day/night behavior;
- `motionDetect`: motion detection and debug settings;
- `records`: local recording settings;
- `outgoing`: forwarding to external endpoints.

## Reloading Settings

For many platforms, Majestic can reload configuration with HUP:

```bash
killall -HUP majestic
```

For debugging, run Majestic in the foreground:

```bash
killall majestic; sleep 3; majestic
```

## CLI Changes

The OpenIPC wiki documents the `cli` helper for changing config values:

```bash
cli -s .video0.codec h264
cli -s .video0.fps 10
killall -HUP majestic
```

## Users

The wiki documents two user levels:

- `root`: main system user for SSH and Web UI access;
- `viewer`: limited user for RTSP access without SSH or Web UI login.

Example viewer user creation:

```bash
adduser viewer -s /bin/false -D -H
echo viewer:123456 | chpasswd
```

Change example passwords before using this on a real camera.

## Endpoints

Majestic exposes camera resources such as video, snapshots, metrics, and control endpoints. The OpenIPC wiki links to the endpoint list at:

```text
https://openipc.org/majestic-endpoints
```

Example image endpoint:

```text
/image.jpg?width=640&height=360&qfactor=73&color2gray=1
```

## Motion Detection

Motion detection can call:

```text
/usr/sbin/motion.sh [count]
```

Enable and debug from CLI:

```bash
cli -s .motionDetect.enabled true
cli -s .motionDetect.debug true
killall majestic; sleep 3; majestic
```

## Troubleshooting

If the camera reboots because Majestic crashes and watchdog resets the system, capture logs from another machine:

```bash
ssh root@192.168.1.10 "killall majestic; sleep 2; majestic" > majestic-$(date +"%F").log
```

Replace `192.168.1.10` with the camera IP.

## Related Pages

- [Video Surveillance](/video-surveillance/)
- [Streams and Majestic](/video-surveillance/streams-and-majestic/)
- [NVR Integration](/video-surveillance/nvr-integration/)

## Sources

- [OpenIPC wiki: Majestic Streamer](https://github.com/OpenIPC/wiki/blob/master/en/majestic-streamer.md)
- [OpenIPC wiki: Majestic example config](https://github.com/OpenIPC/wiki/blob/master/en/majestic-config.md)
- [OpenIPC wiki: Troubleshooting Majestic](https://github.com/OpenIPC/wiki/blob/master/en/trouble-majestic.md)
