import React from "react";
import styles from "./Card_mood.module.css";

const Card_mood = () => (
  <div>
    <div className={styles["post-card"]}>
      <textarea placeholder="What's on your mind?"></textarea>
      <hr />
      <div className={styles["button-row"]} id="first">
        <button className={styles["upload"]}>Upload</button>
        <button className={styles["live-video"]}>Live Video</button>
        <button className={styles["life-event"]}>Life Event</button>
      </div>
      <div className={styles["button-row"]} id="second">
        <button className={styles["people"]}>People</button>
        <button className={styles["location"]}>Location</button>
        <button className={styles["feeling"]}>Feeling</button>
      </div>
      <button className={styles["post"]}>Post</button>
    </div>
  </div>
);

export default Card_mood;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_mood = () => (
         <div>
          <div className="post-card">
  <textarea placeholder="What's on your mind?"></textarea>
  <hr />
  <div className="button-row" id="first">
    <button className="upload">
      Upload
    </button>
    <button className="live-video">
      Live Video
    </button>
    <button className="life-event">
      Life Event
    </button>
  </div>
  <div className="button-row" id="second">
    <button className="people">
      People
    </button>
    <button className="location">
      Location
    </button>
    <button className="feeling">
      Feeling
    </button>
  </div>
  <button className="post">Post</button>
</div>
        </div>
        );

        export default Card_mood;
        
        
         */
}
