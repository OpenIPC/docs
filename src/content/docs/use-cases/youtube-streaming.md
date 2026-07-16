---
title: YouTube Streaming
description: Configure YouTube Live for OpenIPC camera streaming with HLS and H.265.
---

This guide describes the YouTube-side setup for streaming an OpenIPC camera to YouTube Live with HLS ingestion. It is useful for long-running camera streams where temporary network drops should not permanently stop the event.

## Requirements

Before starting:

- enable live streaming on the YouTube account;
- use the YouTube account connected to the target channel;
- be ready to authorize requests with Google OAuth 2.0;
- use the YouTube Data API sample tool at [YouTube Live API code samples](https://developers.google.com/youtube/v3/live/code_samples).

:::note
If YouTube live streaming is not enabled for the account, API calls can fail even when the request body is correct.
:::

## HLS and H.265

Use YouTube HLS ingestion for this setup. YouTube's reference documentation is [Delivering Content via HLS](https://developers.google.com/youtube/v3/live/guides/hls-ingestion).

The important stream settings are:

```json
"cdn": {
  "ingestionType": "hls",
  "frameRate": "variable",
  "resolution": "variable"
}
```

`variable` frame rate and resolution are useful for camera streams where the exact video mode may change or where the stream is not a fixed 1080p/60fps broadcast.

## Create a Live Stream

1. Open [YouTube Live API code samples](https://developers.google.com/youtube/v3/live/code_samples).
2. Select `liveStreams` as the resource.
3. Select `insert` as the method.
4. Open the `insert` use case in the table.
5. In the request body, set the `cdn` object to HLS with variable frame rate and resolution:

```json
"cdn": {
  "ingestionType": "hls",
  "frameRate": "variable",
  "resolution": "variable"
}
```

6. In the credentials section:
   - select `Google OAuth 2.0`;
   - select the `https://www.googleapis.com/auth/youtube` scope;
   - deselect `API Key`.
7. Press `Execute` and authorize the request with the YouTube-connected account.
8. Confirm that the response status is `200`.
9. Save the stream `id` from the response. You will need it when binding the broadcast.

## Create a Broadcast

1. Open [YouTube Live API code samples](https://developers.google.com/youtube/v3/live/code_samples).
2. Select `liveBroadcasts` as the resource.
3. Select `insert` as the method.
4. Open the `insert` use case.
5. Fill the broadcast snippet:

```json
"snippet": {
  "title": "My Hometown Camera",
  "scheduledStartTime": "2026-12-31T00:00:00.000Z",
  "scheduledEndTime": "2027-01-01T00:00:00.000Z"
}
```

Use a start time in the future. The scheduled end time must be after the scheduled start time.

6. In the credentials section:
   - select `Google OAuth 2.0`;
   - select the `https://www.googleapis.com/auth/youtube` scope;
   - deselect `API Key`.
7. Press `Execute` and authorize the request.
8. Confirm that the response status is `200`.
9. Save the broadcast `id` from the response.

## Bind the Broadcast to the Stream

1. Open [YouTube Live API code samples](https://developers.google.com/youtube/v3/live/code_samples).
2. Select `liveBroadcasts` as the resource.
3. Select `bind` as the method.
4. Open the `Bind a broadcast to a stream` use case.
5. Set:
   - `id` to the broadcast ID from the previous step;
   - `streamId` to the live stream ID from the stream creation step.
6. Use Google OAuth 2.0 with the `https://www.googleapis.com/auth/youtube` scope and no API key.
7. Press `Execute` and confirm a `200` response.

## Go Live

Open [YouTube Studio](https://studio.youtube.com/), click `Create`, then `Go live`.

After the YouTube side is prepared, configure the camera or streaming host to send video to the HLS ingestion endpoint returned by YouTube.

## Troubleshooting

### The API Call Fails

Check that live streaming is enabled for the YouTube account and that the request uses OAuth 2.0 with the YouTube scope. An API key alone is not enough for creating and binding streams.

### The Broadcast Stops After a Disconnect

Use a scheduled broadcast with a start date far in the future. This reduces the chance that a temporary camera disconnect ends the event permanently.

### Wrong Stream Parameters

Use HLS ingestion with `variable` frame rate and `variable` resolution unless you are sure the camera always sends one fixed mode.

## Source

- [OpenIPC wiki: youtube-streaming.md](https://github.com/OpenIPC/wiki/blob/master/en/youtube-streaming.md)
- [YouTube HLS ingestion guide](https://developers.google.com/youtube/v3/live/guides/hls-ingestion)
