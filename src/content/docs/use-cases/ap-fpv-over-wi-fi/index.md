---
title: AP FPV over Wi-Fi
sidebar:
  order: 1
description: Simple FPV video over a regular Wi-Fi access point link.
---

AP FPV, or Access Point FPV, is a simple way to send live video from an OpenIPC video transmitter to a phone, tablet, computer, or ground station over regular Wi-Fi.

The VTX creates its own Wi-Fi access point. The viewing device connects to that network and receives the live stream directly. This makes AP FPV easier to try than systems that require a dedicated WFB-NG ground station, but it also has more limited link behavior.

:::danger
AP FPV is alpha software. Link loss or interference can cause loss of video or control awareness. Test on the ground first, keep visual line of sight, and use it at your own risk.
:::

## Best for

- Learning FPV basics.
- Ground vehicles, boats, and slow-moving platforms.
- Basic planes or quads where racing-grade latency is not required.
- Experiments with phones, tablets, laptops, outdoor Wi-Fi gear, or custom ground stations.

## Limitations

- Typical video delay is about 40-70 ms, depending on hardware and RF conditions.
- Performance varies with distance, interference, antenna placement, and receiver quality.
- One Wi-Fi device is normally used as the receiver.
- AP FPV does not provide WFB-NG style link aggregation.
- It is not recommended for racing, fast aerobatics, or untested long-range flights.

## Section map

- [Quick Start](/use-cases/ap-fpv-over-wi-fi/quick-start/)
- [Installation](/use-cases/ap-fpv-over-wi-fi/installation/)
- [Viewing Video](/use-cases/ap-fpv-over-wi-fi/viewing-video/)
- [Network Configuration](/use-cases/ap-fpv-over-wi-fi/network-configuration/)
- [Ground Stations](/use-cases/ap-fpv-over-wi-fi/ground-stations/)
- [APALink](/use-cases/ap-fpv-over-wi-fi/apalink/)
- [Troubleshooting](/use-cases/ap-fpv-over-wi-fi/troubleshooting/)
- [FAQ](/use-cases/ap-fpv-over-wi-fi/faq/)
