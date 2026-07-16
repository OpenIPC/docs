---
title: Divinus
description: Open-source multi-platform streamer for OpenIPC camera systems.
---

Divinus is an open-source, multi-platform streamer from OpenIPC. It is positioned as an alternative to closed streamer components and is designed around a portable hardware abstraction layer for supported SoC families.

## Design Notes

The Divinus README describes a simple, portable structure with HAL implementations for chip series. It uses runtime dynamic linking so the executable can stay compact and can run in constrained environments, including temporary filesystems on read-only systems.

## Features Listed Upstream

The upstream hardware table tracks feature support per SoC family for audio stream, JPEG snapshot, fMP4 stream, RTSP stream, and on-screen display. The support matrix includes several SoC families with complete or in-progress status, so verify the current repository table before planning a deployment for a specific chip.

## Sources

- [Divinus repository](https://github.com/OpenIPC/divinus)
