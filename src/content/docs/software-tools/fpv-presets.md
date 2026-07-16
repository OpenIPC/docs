---
title: FPV Presets
description: Repository format and usage notes for OpenIPC FPV configuration presets.
---

OpenIPC FPV Presets is a repository of preconfigured settings for OpenIPC FPV camera systems. The presets are intended for use from OpenIPC configuration tools and cover scenarios such as racing, freestyle, cinematic, indoor, and long-range setups.

![OpenIPC Companion presets screen](/images/openipc-fpv-presets-companion.webp)

The repository warns that many presets may be outdated and should be used carefully. Treat a preset as a starting point that still needs testing on the exact camera, Wi-Fi adapter, firmware, and RF environment you fly with.

## Repository Format

The repository uses an auto-generated `PRESET_INDEX.yaml` so configuration tools can discover available presets. Individual presets live under `presets/` and usually include a `preset-config.yaml` file plus any extra files that need to be copied to the target device.

A preset definition can include metadata such as name, author, description, category, status, and tags. It can also describe changes to files such as `majestic.yaml` or `wfb.yaml`, and list additional files such as `vtxmenu.ini`.

## Contribution Notes

The repository provides a helper script for creating a preset skeleton and asks contributors to test presets with the configurator before sending a pull request. The generated index should not be edited manually in the official repository workflow.

## Sources

- [OpenIPC FPV Presets repository](https://github.com/OpenIPC/fpv-presets)
- [OpenIPC Configurator](/software-tools/openipc-configurator/)
