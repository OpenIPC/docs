---
title: Ground Stations
sidebar:
  order: 6
description: Use phones, computers, outdoor Wi-Fi equipment, or multi-adapter ground stations with AP FPV.
---

AP FPV can be received by ordinary Wi-Fi devices. Better Wi-Fi adapters, antennas, and outdoor equipment can improve range and stability.

## Supported receiver types

- Android phone or tablet with PixelPilot.
- Laptop or desktop computer with Wi-Fi.
- Professional outdoor Wi-Fi equipment from vendors such as TP-Link or Ubiquiti.
- Ground stations with one or more external Wi-Fi adapters.
- Any device that can receive RTP/UDP video.

## Expected range

Range depends on hardware, antennas, interference, and line of sight.

Typical examples:

- Basic smartphone: about 50-200 m.
- Good Wi-Fi adapter: about 200-500 m.
- Professional outdoor Wi-Fi equipment: 1 km or more in favorable conditions.

These are not guarantees. Always test in the actual environment.

## Multiple Wi-Fi adapters on a ground station

Some ground stations, such as Runcam RX based builds or custom SBC receivers, can use more than one external Wi-Fi adapter. The source article suggests scanning external `wlan`/`wlx` interfaces, creating NetworkManager connections for each adapter, and assigning route metrics so the system can prefer the better route.

Example first-boot logic:

```bash
SSID="OpenIPC"
PASSWORD="12345678"
EXCLUDE_IFACE="wlan0"

WIFI_IFACES=$(ip -o link show | awk -F': ' '{print $2}' | grep -E '^wlan|^wlx' | grep -v "^$EXCLUDE_IFACE$")

INDEX=1
for IFACE in $WIFI_IFACES; do
    CONN_NAME="wifi$INDEX"
    nmcli connection delete "$CONN_NAME" 2>/dev/null || true
    nmcli device wifi rescan ifname "$IFACE"
    sleep 2
    nmcli connection add type wifi ifname "$IFACE" con-name "$CONN_NAME" ssid "$SSID" \
        wifi-sec.key-mgmt wpa-psk wifi-sec.psk "$PASSWORD" \
        ipv4.method auto connection.autoconnect yes

    if [ "$CONN_NAME" = "wifi1" ]; then
        nmcli connection modify "$CONN_NAME" ipv4.route-metric 100
    elif [ "$CONN_NAME" = "wifi2" ]; then
        nmcli connection modify "$CONN_NAME" ipv4.route-metric 200
    fi

    nmcli connection up "$CONN_NAME"
    INDEX=$((INDEX + 1))
done
```

If the onboard `wlan0` should not be used, disconnect it in the stream startup script:

```bash
nmcli device disconnect wlan0
```

:::note
This approach is a practical ground-station customization, not a substitute for WFB-NG link aggregation.
:::
