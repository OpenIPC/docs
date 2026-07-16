---
title: OpenIPC Dashboard
description: Desktop VMS and analytics client for OpenIPC and ONVIF cameras.
---

[OpenIPC Dashboard](https://github.com/OpenIPC/dashboard) is a desktop VMS and analytics client for OpenIPC and ONVIF cameras. It is built with C++17, Qt 6, QML, GStreamer, and ONNX Runtime.

The project focuses on resilient RTSP playback, secure credential handling, transactional local state storage, and observable camera operations.

## Main features

- Low-latency RTSP streaming with Zero, Balanced, and Smooth buffering modes.
- Hardware-accelerated video decoding with support for DXVA, D3D11, CUDA, and Intel QuickSync.
- RTSP transport control over TCP, UDP, or HTTP.
- Stream recovery with frame watchdogs, bounded reconnects, authentication-failure handling, and HD-to-SD fallback.
- Coordinated manual and event recording with MP4 finalization and buffered evidence fallback.
- Secure credential storage through the operating-system credential manager.
- Versioned SQLite state with migration from legacy `state.json`.
- Verified AI model downloads with SHA-256 and size checks.
- OpenIPC / Majestic control center for runtime configuration, live ISP controls, metrics, reloads, backups, snapshots, and day/night hardware control.
- Multi-layer camera discovery through OpenIPC mDNS, ONVIF WS-Discovery, Majestic and legacy WebUI fingerprints, RTSP/HTTP subnet probing, and Dahua SDK results.
- Video mirroring for HUD or teleprompter use cases.

## OpenIPC and Majestic control

Dashboard can open an **OpenIPC / Majestic** control center for OpenIPC cameras. It reads both `/api/v1/config.json` and the camera-specific `/api/v1/config.schema.json`, so the available settings follow the installed Majestic build.

Configuration writes are explicit: Dashboard prepares a minimal nested patch, shows a redacted diff, and only then posts the update to `/api/v1/config`. Older cameras without a schema can still be inspected, but schema-safe writes are not offered.

## Camera discovery

Camera discovery combines multiple signals instead of relying on a single protocol. It can use OpenIPC mDNS markers, ONVIF WS-Discovery, Majestic and legacy WebUI fingerprints, bounded RTSP/HTTP subnet probing, and Dahua SDK results. Normal mode scans the local `/24`; deep mode can cover up to `/20`.

## Build requirements

Development prerequisites from the upstream repository:

- MSVC Visual Studio 2019+ or MinGW.
- CMake 3.16 or newer.
- Qt 6.4+ with Quick, Network, Multimedia, SQL, and Test modules.
- GStreamer 1.x development and runtime packages.

Command-line build example:

```bash
mkdir build
cd build
cmake .. -DCMAKE_PREFIX_PATH="C:/Qt/6.x.x/msvc2019_64"
cmake --build .
```

## System requirements

Minimum:

- Windows 10 64-bit.
- Intel Core i3 6th Gen, AMD Ryzen 3, or equivalent.
- 4 GB RAM.
- DirectX 11 capable GPU.
- 100 Mbps Ethernet or 5 GHz Wi-Fi.

Recommended:

- Windows 10/11 64-bit.
- Intel Core i5, AMD Ryzen 5, or better.
- 8 GB RAM or more.
- Dedicated NVIDIA GPU with CUDA or Intel GPU with QuickSync for multi-stream hardware decoding.
- Gigabit Ethernet for multiple high-bitrate streams.

## Source

- [OpenIPC Dashboard repository](https://github.com/OpenIPC/dashboard)
- [Architecture notes](https://github.com/OpenIPC/dashboard/blob/master/docs/ARCHITECTURE.md)
- [Security notes](https://github.com/OpenIPC/dashboard/blob/master/docs/SECURITY.md)
- [Majestic integration](https://github.com/OpenIPC/dashboard/blob/master/docs/MAJESTIC.md)
- [Camera discovery](https://github.com/OpenIPC/dashboard/blob/master/docs/DISCOVERY.md)
