import { useState } from "react";
import ScreenView from "../components/ScreenComponent";
import RecordView from "../components/VideoComponent";
import { useLocation } from "react-router-dom";

function HomeScreen() {
  const location = useLocation();
  const [start, setStart] = useState("stop");
  const [disable, setDisable] = useState(false);
  const [audioP, setAudioP] = useState(true);
  const [videoP, setVideoP] = useState(true);
  const [screenP, setScreenP] = useState(true);
  const handleAudio = () => {
    setAudioP((prev) => !prev);
  };
  const handleVideo = () => {
    setVideoP((prev) => !prev);
  };
  const handleScreen = () => {
    setScreenP((prev) => !prev);
  };
  const handleStart = () => {
    setStart("start");
    setDisable(true);
  };
  const handleStop = () => {
    setStart("stop");
    setDisable(false);
  };

  return (
    <>
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid p-1">
            <a className="navbar-brand ms-2" href="https://mentorstudents.org/">
              <img
                src="https://mentorstudents.org/images/LogoBlue.png"
                alt="Logo"
                width="300"
                height="50"
                className="d-inline-block align-text-top"
              />
            </a>
            <a className="me-3 nav-link">{location.state.data.name}</a>
          </div>
        </nav>
        <div className="container content">
          <div className="row col-lg-12 gy-3">
            <div className="col col-lg-8 col-sm-12 bg-warning ">
              <div className="vid-frame">
                {screenP && (
                  <ScreenView
                    permission={screenP}
                    Audio={audioP}
                    start={start}
                  />
                )}
              </div>
            </div>
            <div className="col col-lg-4 col-sm-12 h-100">
              <div className="row controls bg-body-tertiary border border-rounnd border-dark m-2">
                <div className="d-flex flex-column justify-content-start p-2">
                  <form className="">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="audio"
                        checked={audioP}
                        onChange={handleAudio}
                        disabled={disable}
                      />
                      <label className="form-check-label" for="audio">
                        Audio
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={videoP}
                        onChange={handleVideo}
                        disabled={disable}
                        id="video"
                      />
                      <label className="form-check-label" for="video">
                        Web cam
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="screen"
                        checked={screenP}
                        onChange={handleScreen}
                        disabled={disable}
                      />
                      <label className="form-check-label" for="screen">
                        Screen Recording
                      </label>
                    </div>
                  </form>
                  <div className="align-self-center mt-auto ">
                    <button
                      className="btn btn-primary "
                      onClick={handleStart}
                      disabled={disable}
                    >
                      ▶
                    </button>
                    <button
                      className="btn btn-danger mx-3"
                      onClick={handleStop}
                      disabled={!disable}
                    >
                      ▣
                    </button>
                    {/* <button className="btn btn-secondary ">| |</button> */}
                  </div>
                </div>
              </div>
              <div className="row bg-info controls video  bg-body-tertiary border border-round border-dark m-2">
                {videoP && (
                  <RecordView
                    permission={videoP}
                    Audio={audioP}
                    start={start}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeScreen;
