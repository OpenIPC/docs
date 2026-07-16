---
title: "Web-Based Camera Recovery Tool"
description: "Recover bricked IP cameras with the Defib Web UI or CLI over UART, TFTP, and supported boot ROM protocols."
---

[Defib](https://github.com/OpenIPC/defib) is a camera recovery tool for bringing bricked IP cameras back to life. It can work with UART serial connections, TFTP, and SoC boot ROM protocols used by HiSilicon, Goke, and related camera platforms.

Use Defib when a camera no longer boots normally, when you need to load U-Boot through UART, or when you want to automate repeatable recovery and flash operations.

![Defib Web Recovery Tool](/images/defib-web-ui.png)

## Web UI

The fastest way to try Defib is the browser-based recovery tool:

[Launch Defib Web Recovery Tool](https://openipc.github.io/defib/)

It runs directly in Chromium-based browsers that support the WebSerial API, such as Chrome, Edge, and Opera. Open the page, select the chip and firmware, connect a USB-to-serial adapter, and start the recovery process.

:::tip
The Web UI is useful for quick manual recovery because it does not require installing the CLI tool first.
:::

## CLI Installation

Install the command-line tool with `uv` or `pipx`:

```bash
uv tool install defib
# or
pipx install defib
```

## Basic Commands

List supported chips and available serial ports:

```bash
defib list-chips
defib ports
```

Recover a device through UART with a raw serial device path:

```bash
defib burn -c hi3516ev300 -f u-boot.bin -p /dev/ttyUSB0
```

Use a stable UART alias when your recovery bench has multiple adapters:

```bash
defib burn -c hi3516ev300 -f u-boot.bin -p /dev/uart-orangepi5plus
```

Start the interactive terminal UI:

```bash
defib tui
```

Run network recovery through TFTP:

```bash
defib network -f firmware.bin --nic eth0
```

For automation, request JSON output:

```bash
defib burn -c gk7205v200 -f u-boot.bin --output json
```

## Full Firmware Install

Defib can install a complete OpenIPC release in one command: U-Boot, kernel, and root filesystem.

```bash
defib install -c hi3516ev300 \
  --firmware openipc.hi3516ev300-nor-lite.tgz \
  -p /dev/uart-IVG85HG50PYA-S \
  --power-cycle --nor-size 8
```

The install flow extracts and verifies the firmware archive, downloads or reuses U-Boot, loads U-Boot through the boot ROM protocol, starts a TFTP server, flashes partitions, verifies data, saves the boot environment, and resets the device.

:::note
The full install mode needs root permissions for TFTP port `69` and network interface configuration. NOR layouts with `--nor-size 8` and `--nor-size 16` are supported.
:::

## Flash Dump Restore

Use restore mode when you have a vendor firmware backup or a full flash dump.

Restore a directory with MTD partition files:

```bash
defib restore -c hi3516av200 -i /path/to/dump/ \
  -p /dev/uart-hi3516av200 --power-cycle
```

Restore a single NOR flash image:

```bash
defib restore -c hi3516ev300 -i flash_dump.bin \
  -p /dev/ttyUSB0 --flash-type nor --power-cycle
```

Restore an `ipctool` backup file:

```bash
defib restore -c hi3516av200 -i backup.bin \
  --uboot /path/to/u-boot.bin -p /dev/ttyUSB0 --power-cycle
```

Defib can auto-detect partition metadata from `ipctool` backup files with embedded YAML headers, so manual `mtdparts` input is usually not needed.

## Automated Power Cycling

Defib can power-cycle devices during recovery. This helps catch short boot ROM windows and makes repeated recovery tests less manual.

The currently documented power backends are:

- MikroTik RouterOS PoE switches.
- OpenIPC Vectis UART bridge over RFC 2217.

Example RouterOS setup:

```bash
export DEFIB_POWER_TYPE=routeros
export DEFIB_POE_HOST=192.168.88.1
export DEFIB_POE_USER=admin
export DEFIB_POE_PASS=

defib burn -c hi3516ev300 -p /dev/uart-IVG85HG50PYA-S --power-cycle -b
```

Example Vectis setup:

```bash
export DEFIB_POWER_TYPE=vectis
export DEFIB_VECTIS_HOST=172.17.32.17
export DEFIB_VECTIS_PORT=35240

defib burn -c hi3516cv300 -p rfc2217://172.17.32.17:35240 --power-cycle -b
```

:::caution
Run Defib near the UART bridge or recovery host when possible. High latency can make tight boot ROM timing windows harder to catch.
:::

## Flash Agent

Defib also includes a bare-metal flash agent for high-speed flash operations. The agent is uploaded through the boot protocol, switches to a faster baud rate, streams data to flash, verifies CRC32, and reboots the device.

Flash a firmware image through the agent:

```bash
defib agent flash -c hi3516ev300 -i firmware.bin -p /dev/ttyUSB0
```

Useful agent commands include:

```bash
defib agent upload -c hi3516ev300 -p /dev/ttyUSB0
defib agent read -p /dev/ttyUSB0 -o flash_dump.bin
defib agent info -p /dev/ttyUSB0
defib agent write -p /dev/ttyUSB0 -i flash_dump.bin
defib agent scan -p /dev/ttyUSB0
```

## Testing with QEMU

Defib can be tested against the `qemu-hisilicon` emulator without physical hardware.

```bash
qemu-system-arm -M hi3516ev300 -m 64M -nographic \
  -chardev socket,id=ser0,path=/tmp/qemu-hisi.sock,server=on,wait=off \
  -serial chardev:ser0
```

Then recover through the QEMU socket:

```bash
defib burn -c hi3516ev300 -p socket:///tmp/qemu-hisi.sock
```

## Links

- [Defib repository](https://github.com/OpenIPC/defib)
- [Defib Web Recovery Tool](https://openipc.github.io/defib/)
- [Vectis UART bridge](https://github.com/OpenIPC/vectis)
