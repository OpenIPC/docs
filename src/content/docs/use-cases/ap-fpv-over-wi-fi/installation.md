---
title: Installation
sidebar:
  order: 3
description: Install AP FPV firmware with online sysupgrade or an offline manual upgrade.
---

There are two common ways to install AP FPV firmware: online `sysupgrade` from the VTX, or manual upgrade after copying firmware files to `/tmp`.

## Online installation

Use this method when the VTX can reach the internet.

1. Connect the VTX to your network using Ethernet, USB networking, or another supported path.
2. SSH into the VTX.
3. Run the matching `sysupgrade` command.

Example for SSC338Q NOR:

```bash
sysupgrade -k -r -n --url=https://github.com/OpenIPC/builder/releases/download/latest/openipc.ssc338q-nor-apfpv.tgz
```

The command downloads the archive, flashes the firmware, and reboots the VTX.

:::caution
Use only firmware that matches your SoC and flash layout. The SSC338Q NOR example is not universal.
:::

## SSH access

Windows:

1. Install [PuTTY](https://www.putty.org/).
2. Enter the VTX IP address.
3. Use port `22` and connection type `SSH`.
4. Log in as `root`.

macOS or Linux:

```bash
ssh root@<vtx-ip-address>
```

Default credentials on fresh OpenIPC installations are commonly:

```text
User: root
Password: 12345
```

Find the VTX IP in your router device list, with a network scanner, or from the serial console.

## Offline installation

Use this method when the VTX has no internet access.

1. Download the matching firmware archive on your computer.
2. Extract it.
3. Copy the kernel and root filesystem files to `/tmp` on the VTX.
4. Run `sysupgrade` with local paths.

Example files for SSC338Q:

```text
uImage.ssc338q
rootfs.squashfs.ssc338q
```

Copy with SCP:

```bash
scp uImage.ssc338q root@<vtx-ip>:/tmp/
scp rootfs.squashfs.ssc338q root@<vtx-ip>:/tmp/
```

Then run:

```bash
sysupgrade -z -n --kernel=/tmp/uImage.ssc338q --rootfs=/tmp/rootfs.squashfs.ssc338q
```

The VTX reboots when the upgrade finishes.

## Firmware sources

- [OpenIPC Builder latest releases](https://github.com/OpenIPC/builder/releases/tag/latest)
- [Latest SSC338Q NOR AP FPV image](https://github.com/OpenIPC/builder/releases/download/latest/openipc.ssc338q-nor-apfpv.tgz)
- [OpenIPC Builder](/software-tools/openipc-builder/)
