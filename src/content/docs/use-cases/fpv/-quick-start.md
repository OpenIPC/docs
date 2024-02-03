---
title: A Step-by-Step Installation Guide
description: A guide designed to provide a detailed walkthrough for setting up an FPV (First Person View)using OpenIPC
---

This guide is designed to provide a detailed walkthrough for setting up an FPV (First Person View) system using OpenIPC. It is structured into several key steps, from hardware setup to software configuration.

## Key Steps Overview

1. **Flashing the Camera and Groundstation with OpenIPC**
2. **Connecting Additional Hardware (WiFi Adapters and BECs)**
3. **Generating and Installing Key Pairing for WFB-NG**
4. **Configuring `wfb.conf` for Optimal WiFi Channel**
5. **Setting up `vdec.conf` on the Groundstation**
6. **Adjusting the `majestic.yaml` File on the Camera**
7. **Testing the Configuration**
8. **Additional Resources: Video Tutorial and Next Steps**

> **Note:** The initial steps involve hardware setup, which can be intricate, while the later steps focus on software configuration, involving editing configuration files.

## Hardware Requirements

- **Camera**: An SSC338 based board with a Sony IMX415 sensor was used for this guide.
  ![Camera](/src/assets/images/sbs-Camera.jpg)

  - [Camera Purchase Link](https://www.aliexpress.com/item/1005004350557805.html)

- **Groundstation**: An Nvr board is recommended for its popularity and cost-effectiveness.
  ![Nvr Board](/src/assets/images/sbs-Nvr.JPG)

  - [Nvr Board Purchase Link](https://www.aliexpress.com/item/1005004023376532.html)

- **WiFi Adapters**: RTL8812AU modules are a good choice.
  ![Wifi board](/src/assets/images/sbs-wifi.png)

  - [WiFi Adapter Purchase Link](https://www.aliexpress.com/item/1005005638445796.html)

- **BECs**: These are used for voltage regulation.
  ![BECs](/src/assets/images/sbs-BECS.jpg)

  - [BECs Purchase Link](https://www.ebay.co.uk/itm/254153188189)

- **FTDI Adapter**: Essential for the flashing process.
  ![FTDI Adapter](/src/assets/images/sbs-ftdi.jpg)

  - [FTDI Adapter Purchase Link](https://www.ebay.co.uk/itm/203581591537?hash=item2f66688ff1)

- **Additional Supplies**: Wires, soldering iron, power connectors (e.g., XT60).

### Step 1: Flashing the Camera and Groundstation with OpenIPC

#### Step 1.1: Flashing the Camera

- **Connection Points**: Identify the UART connection points on the camera board.
  ![Camera Pin out](/src/assets/images/sbs-Camera-Pinout.jpg)
- **Using FTDI Adapter**: Connect the camera to the FTDI adapter for console access.
- **Flashing Process**: Use console commands to flash the OpenIPC firmware onto the camera.

#### Step 1.2: Setting up Serial Terminal Emulation

- **MacOS Instructions**: Utilize built-in commands to establish a connection.
- **Windows Instructions**: Install and use Putty for serial terminal emulation.

#### Step 1.3: Setting up a TFTP Server

- **MacOS**: Activate the built-in TFTP server.
- **Windows**: Install a TFTP server application, such as SolarWinds.

#### Step 1.4: Getting the Correct Firmware Image

- Download the appropriate OpenIPC firmware for your camera's SOC.
  - [Firmware Download Page](https://openipc.org/supported-hardware/featured)

#### Step 1.5: Opening a Console and Flashing the Camera

- Boot the camera while connected to the serial console and flash the firmware.
- Change the camera's root password for security.

#### Step 1.6: Flashing the Groundstation

- Repeat the flashing process with the groundstation NVR board.
- Utilize an HDMI connector for additional display options.

### Step 2: Connecting Additional Hardware (WiFi Adapters and BECs)

- Connect WiFi modules to the camera and groundstation.
- Use BECs to regulate voltage for the WiFi modules.

> **Note:** Ensure proper soldering and connections for stable operation. Always attach antennas to the WiFi modules before powering them on.

### Step 3: Generating and Installing the Key Pairing for WFB-NG

- Generate encryption keys using the `wfb__keygen` command.
- Transfer the `drone.key` to the camera and `gs.key` to the groundstation.

### Step 4: Editing wfb.conf to Set the Correct WiFi Channel

- Configure the WiFi channel in `wfb.conf` to match your hardware capabilities.
- Consider channel compatibility and local regulations for optimal performance.

### Step 5: Configuring vdec.conf on the Groundstation

- Update `vdec.conf` to match the video codec and format used by the camera.
- Ensure consistency in settings between the camera and groundstation.

### Step 6: Configuring the majestic.yaml File on the Camera

- Adjust settings in `majestic.yaml` to define video streaming parameters.
- Align these settings with those expected by the groundstation's `vdec.conf`.

### Step 7: Testing out the Configuration

- Power up the camera and groundstation to test the video stream.
- Troubleshoot any connectivity or streaming issues.

### Step 8: Video Tutorial and Next Steps

- Access a comprehensive video tutorial for visual guidance.
  - [FPV Setup Video Tutorial](https://www.youtube.com/watch?v=libsusKy6zc&lc=Ugx2sDfGe3gd_vaeqXZ4AaABAg)
- Explore further configurations and enhancements for your FPV system.
