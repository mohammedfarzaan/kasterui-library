import React from "react";
import styles from "./Card_birds.module.css";

const Card_birds = () => (
  <div>
    <div className={styles["card"]}>
      <div data-status="inprogress" className={styles["teams"]}>
        <span className={styles["team-info"] + styles["team-home"]}>
          <span className={styles["team-info-container"]}>
            <span className={styles["team-name-info"]}>Team 1</span>
          </span>
        </span>
        <span className={styles["event-scoreboard"]}>
          <span className={styles["event-score-container"]}>
            <span className={styles["current-time-container"]}>
              <span className={styles["event-current-time"]}>
                <span className={styles["event-clock"]}>85'</span>
                <span className={styles["current-part"]}>2H</span>
              </span>
              <span className={styles["progress-dots"]} data-progress="1S">
                <span className={styles["load"]}></span>
              </span>
            </span>
            <span className={styles["score-container"]}>
              <span className={styles["score-home"]}>2</span>
              <span className={styles["custom-sep"]}>-</span>
              <span className={styles["score-away"]}>4</span>
            </span>
          </span>
        </span>
        <span className={styles["team-info"] + styles["team-away"]}>
          <span className={styles["team-info-container"]}>
            <span className={styles["team-icon-container"]}></span>
            <span className={styles["team-name-info"]}>Team 2</span>
          </span>
        </span>
      </div>
    </div>
  </div>
);

export default Card_birds;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_birds = () => (
         <div>
          <div className="card">
  <div data-status="inprogress" className="teams">
    <span className="team-info team-home">
      <span className="team-info-container">
        <span className="team-name-info">Team 1</span>
      </span>
    </span>
    <span className="event-scoreboard">
      <span className="event-score-container">
        <span className="current-time-container">
          <span className="event-current-time">
            <span className="event-clock">85'</span>
            <span className="current-part">2H</span>
          </span>
          <span className="progress-dots" data-progress="1S">
            <span className="load"></span>
          </span>
        </span>
        <span className="score-container">
          <span className="score-home">2</span>
          <span className="custom-sep">-</span>
          <span className="score-away">4</span>
        </span>
      </span>
    </span>
    <span className="team-info team-away">
      <span className="team-info-container">
        <span className="team-icon-container"></span>
        <span className="team-name-info">Team 2</span>
      </span>
    </span>
  </div>
</div>
        </div>
        );

        export default Card_birds;
        
        
         */
}
