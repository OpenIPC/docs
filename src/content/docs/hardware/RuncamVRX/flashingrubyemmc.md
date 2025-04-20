---
title: "Flashing Ruby to EMMC"
description: "A guide on how to flash Ruby to the internal EMMC of Runcam VRX."
---

import ThemeImage from '/src/components/ThemeImage.astro'

This is a guide on how to flash the Runcam VRX's internal EMMC memory with Ruby 11. This guide can also be followed if you brick your VRX with a bad flash and it won't boot into a command line.

1. Download the firmware from https://rubyfpv.com/downloads.php

[RuncamVRX1](https://raw.githubusercontent.com/OpenIPC/docs/refs/heads/main/src/assets/images/RuncamVRX1.jpg)


2. You will need RKDevtool and the driver. You can get them here: https://chipsee.com/docs/PCs/ARM/RK3568/Manuals/Software/Buildroot_Linux_Qt_5_15.html?srsltid=AfmBOoqwVNDxG6CyfUQU13LUY4l1JzBCPZu-VdtFjQS_MgFvvfeG2lgK

3. Install the driver first.

   [RuncamVRX2](https://raw.githubusercontent.com/OpenIPC/docs/refs/heads/main/src/assets/images/RuncamVRX2.jpg)

4. Open config file in RKDevtool_Release_v2.93 folder

5. Change Selected=1 to Selected=2. The app is now English.

   [RuncamVRX3](https://raw.githubusercontent.com/OpenIPC/docs/refs/heads/main/src/assets/images/RuncamVRX3.jpg)

6. There might be some random things here. Right click in the window and click “Clear items”.

   [RuncamVRX4](https://raw.githubusercontent.com/OpenIPC/docs/refs/heads/main/src/assets/images/RuncamVRX4.jpg)

7. Make sure the name is “loader”. Then click here:

   [RuncamVRX5](https://raw.githubusercontent.com/OpenIPC/docs/refs/heads/main/src/assets/images/RuncamVRX5.jpg)

8. You need this file. Download here: https://dl.radxa.com/rock3/images/loader/rock-3a/
   
    [RuncamVRX6](https://raw.githubusercontent.com/OpenIPC/docs/refs/heads/main/src/assets/images/RuncamVRX6.jpg)

9. Right click add item.

     [RuncamVRX7](https://raw.githubusercontent.com/OpenIPC/docs/refs/heads/main/src/assets/images/RuncamVRX7.jpg)

10. Find your Ruby image. Double click storage and select EMMC. Make sure both items are ticked and write by address is ticked.

    [RuncamVRX8](https://raw.githubusercontent.com/OpenIPC/docs/refs/heads/main/src/assets/images/RuncamVRX8.jpg)

11. Put your VRX in bootloader mode. On the bottom there is a small button you can press with a pin next to the HDMI port. Hold it in, power up the VRX, wait 2 seconds and release. The VRX should be in bootloader mode and you can connect it to PC via the Type C port. It should say this:

    [RuncamVRX9](https://raw.githubusercontent.com/OpenIPC/docs/refs/heads/main/src/assets/images/RuncamVRX9.jpg)

12. Press run and wait.

    [RuncamVRX10](https://raw.githubusercontent.com/OpenIPC/docs/refs/heads/main/src/assets/images/RuncamVRX10.jpg)

14. After a while it should say “Download complete”. Then you can power everything down and then restart the VRX. Ruby will go through initialization which will take time. Then it’s done

   
