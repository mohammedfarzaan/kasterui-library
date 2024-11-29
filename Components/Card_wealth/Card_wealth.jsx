import React from "react";
import styles from "./Card_wealth.module.css";

const Card_wealth = () => (
  <div>
    <div className={styles["voice-chat-card"]}>
      <div className={styles["voice-chat-card-header"]}>
        <img className={styles["avatar"]} />
        <div className={styles["username"]}>User name</div>
        <div className={styles["status"]}></div>
      </div>
      <div className={styles["voice-chat-card-body"]}>
        <div className={styles["audio-container"]}>
          <audio controls="">
            <source type="audio/mp3" src="" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  </div>
);

export default Card_wealth;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_wealth = () => (
         <div>
          <div className="voice-chat-card">
  <div className="voice-chat-card-header">
    <img className="avatar" />
    <div className="username">User name</div>
    <div className="status"></div>
  </div>
  <div className="voice-chat-card-body">

    <div className="audio-container">
      <audio controls="">
        <source type="audio/mp3" src="" />
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_wealth;
        
        
         */
}
