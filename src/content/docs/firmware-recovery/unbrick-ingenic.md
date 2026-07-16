---
title: "Unbrick: Ingenic"
description: Recover Ingenic T31 devices by booting U-Boot from an SD card.
---

Use this page for Ingenic T31 devices where the bootloader in flash is broken and the board can boot from SD card.

:::caution
Some Ingenic devices power the SD card slot through a GPIO. On those boards, SD-card recovery may require hardware changes or a working bootloader/Linux environment to enable SD power.
:::

## Boot Behavior

The OpenIPC wiki notes that if T31 fails to boot U-Boot from flash, it can try to boot from SD card. This makes SD-card recovery possible when the flash bootloader is broken.

The U-Boot image must be built for SD-card boot. Do not use a normal flash-boot U-Boot file for this procedure.

## Build U-Boot for SD Boot

Example setup from the wiki:

```bash
mkdir /opt/openipc
cd /opt/openipc
git clone https://github.com/Dafang-Hacks/mips-gcc472-glibc216-64bit.git
git clone https://github.com/OpenIPC/u-boot-ingenic.git
export PATH="$PATH:/opt/openipc/mips-gcc472-glibc216-64bit/bin"
cd u-boot-ingenic
make distclean
```

Choose the final build command for the exact T31 variant:

| SoC | Command |
| --- | --- |
| T31N | `make isvp_t31_msc0` |
| T31L | `make isvp_t31_msc0_lite` |
| T31X | `make isvp_t31_msc0_ddr128M` |
| T31A | `make isvp_t31a_msc0_ddr128M` |

The expected output file is:

```text
u-boot-with-spl.bin
```

## Write U-Boot to SD Card

Identify the SD card device carefully:

```bash
fdisk -l
```

Then write U-Boot at the documented offset. Replace `/dev/sdb` with the actual SD card device:

```bash
dd if=./u-boot-with-spl.bin of=/dev/sdb bs=512 seek=34
```

:::danger
Double-check the `/dev` device. Writing to the wrong disk can destroy data on the host machine.
:::

## Boot from SD Card

If the flash bootloader is broken or empty, the SoC may boot from SD automatically. If a valid flash bootloader is still present, extra hardware steps may be needed to prevent booting from flash.

After booting the SD-card U-Boot, continue with the normal install or recovery procedure for the camera.

## Sources

- [OpenIPC wiki: Unbrick Ingenic T31 with SD Card](https://github.com/OpenIPC/wiki/blob/master/en/ingenic-t31-unbrick-with-sd-card.md)
- [OpenIPC u-boot-ingenic](https://github.com/OpenIPC/u-boot-ingenic)
