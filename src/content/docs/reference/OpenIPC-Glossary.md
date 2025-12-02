---
title: OpenIPC Glossary
description: Here is a glossary of terms related to OpenIPC
---
# OpenIPC Glossary

- **Adaptive Link (Alink)**  
  A feature or script for OpenIPC, enabling adaptive capabilities in the radio link.

- **Air Unit (AU)**  
  The camera and video transmission unit mounted on a drone, typically consisting of an OpenIPC camera, a Wi-Fi adapter, and a power source.

- **AIO (All-In-One)**  
  A prefix used for OpenIPC's own manufactured boards, indicating they have a built-in transmitter and do not require external devices.

- **Binary Blobs**  
  Closed-source binary files (e.g., drivers, kernel modules) provided by hardware vendors that are necessary for OpenIPC to function. Their presence prevents OpenIPC from being a "FULL OpenSource project".

- **Bonnet**  
  An OpenIPC VRX (video receiver) device.

- **CLI (Command Line Interface)**  
  A text-based interface used to configure and manage OpenIPC device settings through commands like `set_channel` or `set_resolution`. The `yaml-cli` tool is used for this purpose.

- **Commercial Use**  
  While OpenIPC is an open project, commercial use of its logo and name, especially for factory production and sales, requires agreement with the OpenIPC team and/or publication of hardware circuits in the OpenIPC Hardware repository.

- **Companion (OpenIPC Companion)**  
  The current name for the multi-platform configurator application, formerly known as OpenIPC Configurator. It simplifies setup and configuration for end-users, avoiding command-line interactions.

- **Community**  
  OpenIPC functions as a community rather than a commercial company, relying on voluntary contributions and aiming for project development over profit.

- **Coupler**  
  A tool designed for seamless transitions between video camera firmware versions.

- **DIY (Do-It-Yourself)**  
  OpenIPC is fundamentally a DIY project that encourages experimentation and participation in its development.

- **Docs (docs.openipc.org)**  
  A new documentation resource intended to be the central, organized repository of OpenIPC information, offering better search and a more user-friendly interface compared to the older Wiki.

- **Firmware**  
  Binary pre-compiled files provided for easy end-user installation, with full source code access under the MIT License for developers.
  - **FPV Firmware**: A specific variant of OpenIPC firmware tailored for First Person View applications, sometimes referred to as `openipc-wfbng`.
  - **Lite Firmware**: A basic version of OpenIPC firmware.
  - **Ultimate Firmware**: A comprehensive version of OpenIPC firmware that typically requires UART console access for installation or migration.

- **Goke Processors**  
  A type of processor compatible with OpenIPC firmware, suitable for airplanes and low-speed devices, though they generally have higher latency. Examples include GK7205v200 and GK7205v300.

- **Ground Station (GS)**  
  The receiving setup for FPV, typically composed of a single-board computer (like Radxa Zero 3W) and Wi-Fi adapters.

- **GitHub**  
  The primary platform where the OpenIPC organization hosts most of its projects, source code, and documentation (Wiki and Docs).

- **Hardware Repository**  
  A specific GitHub repository where published circuits and boards compatible with OpenIPC are located.

- **Industrial IP Camera Boards (38x38)**  
  Standardized small-form-factor industrial camera boards that OpenIPC firmware can run on, receiving general support.

- **IMX Sensors**  
  Common camera sensors used with OpenIPC, such as IMX307, IMX335, and IMX415.

- **IPCTool**  
  A utility and library used for checking the hardware of IP cameras.

- **Latency**  
  The delay between video capture and display, a critical performance metric for FPV systems. OpenIPC systems can achieve low latency, with reported averages of 34–48 ms on Radxa Zero 3W at 120 fps.

- **Majestic**  
  A universal IP camera streamer that serves as a core component of OpenIPC firmware. It is a **closed-source** component that internally uses the `smolrtsp` project.

- **Mario / Thinker / UltraSight**  
  Specific model names for OpenIPC's internally manufactured AIO devices.

- **Mavfwd**  
  A component responsible for forwarding Mavlink packets within the OpenIPC system.

- **Microbe-web (WebUI)**  
  The web interface for OpenIPC cameras. It is often disabled on "air devices" to optimize for space, with plans for future integration of a smaller interface.

- **MIT License**  
  The open-source license under which OpenIPC source code is released, granting broad permissions for reuse, including in proprietary software.

- **MSPOSD**  
  A component that handles On-Screen Display (OSD) functionality, compatible with flight controllers running INAV, Betaflight, or ArduPilot. It supports custom graphical widgets and can display real-time data like camera temperature, CPU load, and video bitrate.

- **Open Collective**  
  The platform used by OpenIPC for financial contributions, supporting project development as a non-profit community.

- **Open Source**  
  Refers to OpenIPC's commitment to making its source code and development platforms openly accessible under the MIT License. However, due to reliance on proprietary binary components from chip manufacturers, it is not considered "FULL Open Source".

- **OSD (On-Screen Display)**  
  Graphical or textual overlays providing flight data or other information. In OpenIPC, OSD can be rendered on either the camera (air unit) or ground station side.

- **Printables.com**  
  A platform where OpenIPC community members share and tag 3D printable models (e.g., cases, mounts) with `#openipc`.

- **Radxa Zero 3W**  
  A single-board computer (SBC) frequently used as a component for OpenIPC ground stations.

- **RubyFPV (Ruby)**  
  An independent, comprehensive FPV system that integrates with OpenIPC cameras. It offers a wide range of features, including full camera sensor configuration, OSD, multiple radio links, and telemetry alarms. Ruby is considered a partner project to OpenIPC.

- **SDK (Software Development Kit)**  
  Kits provided by hardware manufacturers that may be necessary to write drivers for custom sensors or access specific hardware functionalities. NDAs (Non-Disclosure Agreements) are sometimes required to access these SDKs.

- **SigmaStar Processors (SSC)**  
  Processors recommended for high-performance FPV applications like freestyle, due to their lower latency capabilities. Examples include SSC338Q and SSC30KQ.

- **Smolrtsp**  
  An open-source library that is utilized internally by the Majestic streamer.

- **SSC Processors**  
  See **SigmaStar Processors**.

- **Telegram Chat Groups**  
  Various channels where the OpenIPC community discusses firmware, software development, troubleshooting, and other related topics.

- **UART**  
  Universal Asynchronous Receiver-Transmitter, a common serial communication protocol used for telemetry and debugging with OpenIPC devices.

- **VENC Firmware**  
  A planned or experimental firmware profile focused on video encoder functionality.

- **VRX (Video Receiver)**  
  See **Goggles / VRX**.

- **WebUI**  
  See **Microbe-web**.

- **WFB-NG (wifibroadcast-ng)**  
  A broadcast-only protocol used for FPV video transmission, commonly integrated with OpenIPC systems.

- **Wiki (GitHub Wiki)**  
  An older collection of documentation and instructions on GitHub. It has been noted for being technical, sometimes chaotic, and outdated, leading to efforts to reorganize and migrate information to the newer Docs site.

- **Yaml-CLI**  
  A command-line interface tool used to change settings.
- **NIC**
   Network Interface Controller (also commonly called Network Interface Card).
   It is the hardware component (either built into your device or an external adapter) that allows your computer, phone, laptop, or any device to connect to a Wi-Fi network.
