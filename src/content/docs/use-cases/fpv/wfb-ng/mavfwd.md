---
title: The mavfwd tool
description: Sending commands to the air unit over the MAVLink channel with mavfwd
---

`mavfwd` forwards MAVLink packets between the air unit and the ground station. The same channel can also carry commands to the air unit.

## Enable incoming connections on the ground station

Edit `/etc/wifibroadcast.cfg` and change the `[gs_mavlink]` peer from outgoing to incoming:

```diff
[gs_mavlink]
-peer = 'connect://127.0.0.1:14550'  # outgoing connection
-# peer = 'listen://0.0.0.0:14550'   # incoming connection
+# peer = 'connect://127.0.0.1:14550'  # outgoing connection
+peer = 'listen://0.0.0.0:14550'   # incoming connection
```

## Update settings

```
echo curl http://localhost/api/v1/set?video0.fps=120 > /dev/udp/localhost/14550
```

## Update drone key

```
file="echo $(cat gs.key | base64) | base64 -d > /etc/drone.key"
echo $file > /dev/udp/localhost/14550
```

## Update configuration

```
file="echo $(cat wfb.conf | base64) | base64 -d > /etc/wfb.conf"
echo $file > /dev/udp/localhost/14550
```
