import React, { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

function RecordView({ start = "stop", permission = false, Audio = false }) {
  const { status, startRecording, stopRecording, mediaBlobUrl, clearBlobUrl } =
    useReactMediaRecorder({
      video: permission,
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
      <video src={mediaBlobUrl} controls autoPlay width={350} height={250} />
    </div>
  );
}
export default RecordView;
