---
title: Troubleshooting
sidebar:
  order: 8
description: Diagnose AP FPV Wi-Fi, video, Web UI, and performance issues.
---

Use these checks when AP FPV does not connect or the video link is unstable.

## The OpenIPC Wi-Fi network is not visible

1. Make sure the VTX is powered.
2. Wait 1-2 minutes after boot.
3. Confirm AP FPV firmware was installed successfully.
4. Restart the VTX.
5. Move closer to the VTX.
6. Check UART logs if the AP still does not appear.

## Connected but no video

1. Confirm the receiver is connected to the correct Wi-Fi network.
2. Open `http://192.168.0.1` and check whether the Web UI loads.
3. Try PixelPilot on Android.
4. Confirm the receiver can receive UDP/RTP on port `5600`.
5. Check that Ethernet or another interface is not changing the expected route.

## Poor video quality

1. Move closer to the VTX.
2. Improve line of sight.
3. Reduce nearby Wi-Fi interference.
4. Try another 5 GHz channel.
5. Use better antennas or a better Wi-Fi adapter.
6. Adjust video settings in the Web UI.

## Web UI does not load

1. Confirm the receiver is on the AP FPV Wi-Fi network.
2. Open `http://192.168.0.1`.
3. Try another browser.
4. Clear browser cache and cookies.
5. Restart both the receiver and the VTX.

## Performance tips

- Prefer 5 GHz Wi-Fi when possible.
- Keep line of sight between VTX and receiver.
- Use a mix of directional and omnidirectional antennas where appropriate.
- Test the link on the ground before flying.
- Account for 40-70 ms of video delay.
- Stay inside the range you have already tested.
