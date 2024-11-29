import React from "react";
import styles from "./Card_watch.module.css";

const Card_watch = () => (
  <div>
    <div className={styles["temporary__storage"]}>
      <div className={styles["card"]}>
        <div className={styles["image"]}></div>
        <div className={styles["image__overlay"]}></div>
        <div className={styles["content"]}>
          <div className={styles["avatar"]}></div>
          <div className={styles["content__text"]}>
            <span className={styles["stream__title"]}>
              🚀2023 LEC Summer - Group Stage - Day 2 - KOI vs. G2
            </span>
            <div className={styles["content__body"]}>
              <span className={styles["streamer__name"]}>ibai</span>
              <span className={styles["event"]}>League of Legends</span>
            </div>

            <span className={styles["categories"]}>
              <a className={styles["categories__btn"]} href="#">
                Español
              </a>
              <a className={styles["categories__btn"]} href="#">
                KOI
              </a>
              <a className={styles["categories__btn"]} href="#">
                LOL
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_watch;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_watch = () => (
         <div>
          <div className="temporary__storage">
  <div className="card">
    <div className="image"></div>
    <div className="image__overlay"></div>
    <div className="content">
      <div className="avatar"></div>
      <div className="content__text">
        <span className="stream__title">🚀2023 LEC Summer - Group Stage - Day 2 - KOI vs. G2</span>
        <div className="content__body">
          <span className="streamer__name">ibai</span>
          <span className="event">League of Legends</span>
        </div>
       
        <span className="categories">
          <a className="categories__btn" href="#">Español</a>
          <a className="categories__btn" href="#">KOI</a>
          <a className="categories__btn" href="#">LOL</a>
        </span>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_watch;
        
        
         */
}
