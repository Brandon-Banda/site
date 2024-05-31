import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./Water.scss";
import pause from "../../rsc/pause.svg";
import play from "../../rsc/play.svg";

let changeX = "";

const handler = (event) => {
  const info = event.target.value;
  if (event.charCode === 13) {
    console.log("I want to add or remove " + info + " oz");
    event.target.value = "";
    changeX = info;
    console.log(changeX);
  }
};

const BarContainer = styled.div`
  width: 500px;
  margin-top: 200px;
`;

const Track = styled.div`
  width: 100%;
  height: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  bow-shadow: inset 0 0 5px #000;
`;

const Thumb = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: #6bccf9;
  border-radius: 8px;
`;

function ProgressBar() {
  const [per, setPer] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("water-state");
    if (data) {
      setPer(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("water-state", JSON.stringify(per));
  });

  const clamp = (min, value, max) => {
    return Math.min(Math.max(min, value), max);
  };

  return (
    <Track>
      <Thumb percentage={() => clamp(0, per, 100)} />
      <h2
        style={{
          color: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        You've drank {per} oz Today!
      </h2>
      <div className="button-container">
        <button className="button" onClick={() => setPer(per + 2)}>
          One Sip
        </button>
        <button
          className="button"
          onClick={() => setPer(1 * per + 1 * changeX)}
        >
          Add X
        </button>
        <button className="button" onClick={() => setPer(0)}>
          Reset
        </button>
        <button
          className="button"
          onClick={() => setPer(1 * per - 1 * changeX)}
        >
          Remove X
        </button>
        <input
          type="text"
          // TODO: Im sure the deprecated onkeypress makes it too where its null
          onKeyPress={(e) => handler(e)}
          min="10"
          max="10"
          maxLength="3"
          step="1"
          placeholder={changeX + "±oz"}
          pattern="[0-9]{3}"
          required
        />
      </div>
      <p style={{ color: "white", fontSize: "30px" }}>One sip adds 2oz</p>
    </Track>
  );
}

const cn = (...args) => {
  return args.filter((x) => x).join(" ");
};

function Timer() {
  const [seconds, setSeconds] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState("Start");

  useEffect(() => {
    // load data from local storage
    const data = localStorage.getItem("time-state");
    const data2 = localStorage.getItem("timer-state");

    if ((data, data2)) {
      setSeconds(JSON.parse(data));
      setIsRunning(JSON.parse(data2));
    }
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      if (isRunning) {
        const id = window.setInterval(() => {
          setSeconds((seconds) => seconds - 1);
          setStatus(
            (status) =>
              "good, which means you sipped and this is how much time until you sip again."
          );
        }, 1000 * 60);
        return () => window.clearInterval(id);
      }
    } else {
      setSeconds("60");
      setIsRunning(false);
      setStatus("bad, the timer expired. Drink!");
    }

    return undefined;
  }, [isRunning]);

  useEffect(() => {
    // store to localStorage
    localStorage.setItem("time-state", JSON.stringify(seconds));
    localStorage.setItem("timer-state", JSON.stringify(isRunning));
  });

  return (
    <div className="circleContainer">
      <div className={cn("circle", !isRunning && "paused")}>
        <div className="time">{seconds}</div>
      </div>
      <p className="status">{status}</p>
      <div className="buttons">
        {isRunning ? (
          <button
            className="play-pause"
            onClick={() => {
              setIsRunning(false);
            }}
          >
            <img src={pause} />
          </button>
        ) : (
          <button className="play-pause" onClick={() => setIsRunning(true)}>
            <img src={play} />
          </button>
        )}
        <button
          disabled={!isRunning}
          className="reset"
          onClick={() => {
            setIsRunning(false);
            setSeconds(60);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function Water() {
  return (
    <>
      <div className="masterContainer">
        <Timer />
        <div className="space"></div>
        <BarContainer>
          <ProgressBar />
        </BarContainer>
      </div>
    </>
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.number,
};

export default Water;
