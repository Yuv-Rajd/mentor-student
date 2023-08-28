import React, { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

function ScreenView({ start = "", permission = false, Audio = false }) {
  const { status, startRecording, stopRecording, mediaBlobUrl, clearBlobUrl } =
    useReactMediaRecorder({
      screen: permission,
      audio: Audio,
    });
  function checkStatus() {
    if (start === "start") {
      clearBlobUrl();
      startRecording();
    }
    if (start === "stop") {
      stopRecording();
    }
  }
  useEffect(() => {
    clearBlobUrl();
    checkStatus();
  }, [start]);

  return (
    <div>
      <p>{status}</p>
      <video src={mediaBlobUrl} controls autoPlay width={800} height={500} />
    </div>
  );
}
export default ScreenView;
