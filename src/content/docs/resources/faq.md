---
title: "OpenIPC FAQ"
description: "Frequently Asked Questions for OpenIPC documentation covering general, FPV-specific, documentation, and technical/setup topics."
---

# OpenIPC FAQ

This FAQ provides answers to common questions about OpenIPC, including general information, FPV-specific details, documentation, and technical/setup topics. Always refer to  [docs.openipc.org](https://docs.openipc.org) for up-to-date information.

## General Questions about OpenIPC

### What is OpenIPC?
OpenIPC is a non-profit one‑stop‑shop for communication and experimentation aimed at everyone who uses IP cameras—for surveillance, medicine, robotics, FPV, and more. It is a DIY project based on Buildroot/OpenWrt that replaces proprietary camera firmware and provides a platform from which various solutions can be built.

### Is OpenIPC a commercial project?
No, OpenIPC is not a commercial project or company. It is an officially registered, non‑profit community created to foster collaboration rather than form an organization or company.

### How can I contribute to OpenIPC?
You can contribute by:
- Writing and improving documentation
- Proofreading and updating websites
- Testing and reporting your experiences
- Adding compact corrections or updates to the documentation
- Contributing code following the available guidelines

### Where can I find OpenIPC documentation?
The main documentation resources are:
- The OpenIPC Wiki on GitHub: [github.com/openipc/wiki](https://github.com/openipc/wiki)
- The new documentation site: [docs.openipc.org](https://docs.openipc.org)  
_Note: Some Wiki content may be outdated and is in the process of being updated or merged._

### What are the main development areas of OpenIPC?
OpenIPC focuses on several interconnected areas:
- **Video Surveillance**
- **FPV (First Person View)**
- **Home Automation**

These areas share common elements like board firmware and specialized video processing techniques.

### What are the communication channels for OpenIPC?
The primary communication channel is Telegram. Multiple groups exist, including:
- An international channel for general development discussion
- A dedicated development channel
- An FPV user group

Links to these channels are available on the [OpenIPC website](https://openipc.org) and the Wiki.

## OpenIPC FPV Specific Questions

### What is OpenIPC FPV?
OpenIPC FPV refers to using OpenIPC firmware and hardware for First Person View (FPV) applications—primarily in drones. It involves developing dedicated hardware and software for FPV use.

### What are the goals of OpenIPC FPV?
The goal is to provide a flexible, open system for FPV that allows users to experiment and innovate using inexpensive, widely available components. There is also an aspiration for OpenIPC to become the defacto FPV standard.

### Which firmware can I use for FPV?
Current firmware options include:
- **WFB-NG (wifibroadcast next generation)**
- **Ruby FPV**

OpenIPC supports multiple solutions tailored for FPV.


### What about latency in OpenIPC FPV?
Latency is generally around 80–100 ms at 60fps. For lower latency, it is recommended to use 120fps encoding/decoding with a 120Hz monitor. Official latency figures are not stated due to measurement variability.

### Is there a WebUI for OpenIPC FPV firmware?
PLACE HOLDER
### How can I get help with setting up OpenIPC FPV?
You can ask for help in the OpenIPC FPV users Telegram group. It is also recommended to review the existing documentation first, as many common questions have already been discussed.

### What hardware is supported for OpenIPC FPV?
OpenIPC supports various hardware devices, with ongoing development of new boards. Examples include the SSC30KQ, SSC338Q, and the more recent OpenIPC Thinker. Compatibility with third‑party cables is also under investigation.

### What is MSP OSD?
MSP OSD (On‑Screen Display) is a feature that overlays flight controller information onto the video feed. OpenIPC’s related project is hosted on GitHub under msposd, with discussions on integrating OSD setups from INAV/Betaflight.

### What is wifibroadcast/wfb-ng?
WFB‑NG is the next generation of a long‑range packet radio link that uses raw WiFi. It is a key component of OpenIPC FPV, and setup is managed via commands like `wfb_cli gs`.

### What is Ruby FPV?
Ruby FPV is another digital FPV system compatible with OpenIPC cameras. More detailed resources are available on [RubyFPV website] (https://rubyfpv.com/).

## Documentation Related Questions

### Why is documentation important for OpenIPC?
Documentation is crucial because it:
- Simplifies the learning curve for beginners
- Attracts more users and pilots
- Supports overall project growth
- Addresses gaps in standardization and clarity

### Where is the OpenIPC Wiki?
The Wiki is hosted on GitHub at [github.com/openipc/wiki](https://github.com/openipc/wiki).

### Where is the new OpenIPC documentation site (Docs)?
The new site is available at [docs.openipc.org](https://docs.openipc.org).

### How can I contribute to OpenIPC documentation?
To contribute:
- Create a GitHub account and fork the Wiki or Docs repository
- Add or update content using Markdown
- Submit a pull request (PR) following the [Contribution Guidelines](https://docs.openipc.org/development/contribution-guidelines/)


### Is the existing documentation up-to-date?
Much of the Wiki is outdated and in need of updating or merging. The project has dedicated 2024 as the year of technical documentation improvements, with ongoing efforts to migrate and refine content.

### Are there any guidelines for contributing to documentation?
There are general guidelines (e.g., “don’t be a dick”) that encourage clear, repeatable instructions. Additional rules—such as for image formatting—are detailed in the [Contribution Guidelines](https://docs.openipc.org/development/contribution-guidelines/).



---

For the most current and detailed information, visit the [new documentation site](https://docs.openipc.org).
