---
title: Quick Start
description: The fastest path to get started with OpenIPC
---

OpenIPC replaces vendor firmware on supported IP camera hardware. Before you
flash anything, identify the exact camera board, SoC, flash type, and recovery
options. Installing an image for the wrong target can leave the device unable to
boot.

## 1. Identify your hardware

- Open the device page, label, or board silkscreen and record the camera model.
- Identify the SoC family and flash type when possible.
- Check the official [supported hardware list](https://openipc.org/supported-hardware/featured).
- If the device is not listed, search the OpenIPC Wiki and community channels
  before trying a similar image.

## 2. Choose the right path

- Use [Software](/software-tools/) for firmware update and flashing
  notes.
- Use [FPV](/use-cases/fpv-over-wfb-ng/quick-start/) if you are building a digital
  video link.
- Use [Video Surveillance](/use-cases/video-surveillance/quick-start/) for
  general IP camera deployments.
- Use [Home Automation](/use-cases/home-automation/quick-start/) if the camera
  will be integrated with a home automation system.

## 3. Prepare a recovery plan

Before flashing, make sure you have a way back:

- Save the current firmware or partitions if your guide requires it.
- Keep UART access available for troubleshooting.
- Prepare a TFTP server when the selected guide uses network recovery.
- Do not interrupt power while flashing or upgrading.

## 4. Install and verify

Follow the guide for your exact board or SoC. After the first boot, verify basic
access before changing advanced settings:

- The device receives an IP address or responds on its documented default IP.
- SSH or the Web UI is reachable.
- Video streaming works with the configured streamer.
- The firmware version and target match the image you installed.

If a step does not match your hardware, stop and ask in the OpenIPC community
with the device model, SoC, board photos, boot log, and the guide you followed.
