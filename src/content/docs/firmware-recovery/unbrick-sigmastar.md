---
title: "Unbrick: SigmaStar"
description: Recover SigmaStar devices by restoring U-Boot with snander-mstar.
---

Use this page when a SigmaStar-based device has a damaged bootloader or cannot boot far enough for normal UART/TFTP recovery.

The OpenIPC wiki documents recovery with a CH341A-style adapter, SigmaStar UART/I2C wiring, and `snander-mstar`.

:::danger
This is a low-level recovery procedure. Wrong wiring, wrong flash target, or unstable power can damage the device or erase useful data.
:::

## Required Tools

- CH341A-style adapter or compatible programmer.
- Access to the SigmaStar UART/I2C pads.
- `snander-mstar` from [openipc/snander-mstar releases](https://github.com/openipc/snander-mstar/releases).
- Matching U-Boot file from [OpenIPC firmware latest release](https://github.com/OpenIPC/firmware/releases/tag/latest).

## Wiring Reference

The wiki describes this mapping:

```text
GND -> GND
TX  -> SDA I2C
RX  -> SCL I2C
```

The exact pads depend on the board. Confirm the board pinout before powering the device.

## Check Flash Detection

Power the device while connected to the programmer, then check detection:

```bash
snander -i -q
```

If the flash is not detected, power-cycle the device and recheck wiring.

## Erase the Boot Partition

The wiki example erases the first `0x200000` bytes:

```bash
snander -l 0x200000 -e
```

## Write U-Boot

Place the matching U-Boot file in the same folder as `snander`, then write it. Example for SSC338Q NAND:

```bash
snander -w u-boot-ssc338q-nand.bin
```

After restoring the bootloader, continue with the normal UART/TFTP install flow for the exact SoC and flash layout.

## Notes

Known SigmaStar I2C device addresses from the wiki:

```text
0x49 -> MStar ISP
0x59 -> MStar Debug
```

After restoring or installing U-Boot, bootloader access is expected on the engineering/debug UART port, often `ttyS0`.

## Sources

- [OpenIPC wiki: SigmaStar unbrick](https://github.com/OpenIPC/wiki/blob/master/en/sigmastar-unbrick.md)
- [snander-mstar releases](https://github.com/openipc/snander-mstar/releases)
