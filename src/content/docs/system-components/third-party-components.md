---
title: Third-Party Components
description: Unofficial third-party projects and components related to the OpenIPC ecosystem.
---

This page lists community and third-party projects that can be useful with OpenIPC-based systems, but are not official OpenIPC components unless the upstream project states otherwise. Check each repository for current hardware support, build requirements, license, and maintenance status before using it in a production or field setup.

## AMLDigitalFPV

[AMLDigitalFPV](https://github.com/imagemlt/AMLDigitalFPV) is an unofficial Amlogic-based ground FPV receiver for the OpenIPC ecosystem. It targets inexpensive consumer Amlogic boxes such as S905L3A and S905X2 devices and uses their hardware decoding capabilities for ground-station video reception.

The project uses GStreamer with `libamcodec` for video and can optionally receive Opus audio over RTP into PulseAudio. Its README describes CMake and legacy Makefile builds, a systemd service unit, runtime options for video size, frame rate, codec, decoder mode, recording path, and UDP commands for recording and audio control.

Use the upstream repository as the source of truth for supported devices and current build instructions.

### Sources

- [AMLDigitalFPV repository](https://github.com/imagemlt/AMLDigitalFPV)
