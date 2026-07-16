---
title: Quick Start
description: Bring up an OpenIPC camera as a standard IP surveillance camera.
---

Use this guide as the shortest path from a supported camera board to a working OpenIPC surveillance camera.

:::caution
First-time installation may require UART access, soldering, a TFTP server, or direct flash recovery. Check the exact board and SoC before writing firmware.
:::

## 1. Identify the Hardware

Before flashing, identify:

- SoC vendor and model;
- image sensor model;
- flash type and flash size;
- UART pads and bootloader access method;
- existing firmware backup options.

Start with [OpenIPC supported hardware](https://openipc.org/supported-hardware/featured) and the relevant hardware page. If the exact board is unknown, do not assume that a similar-looking camera uses the same flash layout.

## 2. Prepare Recovery Tools

Keep recovery tools ready before changing firmware:

- USB-UART adapter;
- serial terminal such as PuTTY, `screen`, or `minicom`;
- TFTP server when the install flow needs one;
- matching firmware image from OpenIPC releases or Builder;
- stable power supply.

For a generic UART workflow, use [General UART Flashing Guide](/firmware-recovery/general-uart-flashing-guide/). For broken bootloaders, see [Defib](/firmware-recovery/defib/), [Unbrick: SigmaStar](/firmware-recovery/unbrick-sigmastar/), or [Unbrick: Ingenic](/firmware-recovery/unbrick-ingenic/).

## 3. Install OpenIPC

Use the installation commands generated for the exact device or SoC. Run bootloader commands line by line and keep power stable while flash is being written.

After flashing, let the camera boot fully before disconnecting power.

## 4. Find the Camera IP

After the first boot, connect the camera to the same network as your computer and find the address assigned to it.

Recommended ways:

- try the commonly used OpenIPC camera address first: `http://192.168.1.10/`;
- check the DHCP leases or client list on your router;
- look for a new device named `openipc` or similar in the router UI;
- scan the local subnet from your computer, for example with `nmap` if it is available:

```bash
nmap -sn 192.168.1.0/24
```

If you installed through UART, watch the serial boot log. OpenIPC usually prints network initialization and the assigned address during boot.

When you find the address, open the Web UI in a browser:

```text
http://CAMERA_IP/
```

For SSH access, use:

```bash
ssh root@CAMERA_IP
```

Replace `CAMERA_IP` with the actual address from your router, scan result, or UART log.

:::note
`192.168.1.10` is a common OpenIPC camera address, but do not assume it is universal. The actual address depends on the image, network configuration, and whether DHCP is available.
:::

## 5. First Login

Default credentials on many OpenIPC builds are:

```text
username: root
password: 12345
```

Change the password during first setup. Verify that SSH and the Web UI work before changing stream settings.

## 6. Verify Video

Open the Web UI and confirm that the camera produces a live image. Then verify RTSP or snapshot access with [Streams and Majestic](/video-surveillance/streams-and-majestic/).

## 7. Connect to an NVR

After the camera is stable, add it to your recorder or monitoring system. See [NVR Integration](/video-surveillance/nvr-integration/).

## 8. Update Safely

When OpenIPC is already installed and booting normally, use [Firmware Updates](/firmware-recovery/firmware-updates/) or [Sysupgrade](/firmware-recovery/online-sysupgrade/). Do not update production cameras without a recovery path.
