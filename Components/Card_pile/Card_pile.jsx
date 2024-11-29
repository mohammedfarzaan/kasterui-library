import React from "react";
import styles from "./Card_pile.module.css";

const Card_pile = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__view"]}>
        <div className={styles["card__view__data"]}>
          <p className={styles["card__view__preview"]}>Preview</p>
          <p className={styles["card__play__icon"]}>
            <svg width="8px" height="8px" viewBox="-0.5 0 7 7" version="1.1">
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-347.000000, -3766.000000)"
                  fill="#000000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      fill="#EAECEE"
                      d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"
                      id="play-[#1003]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </p>
          <p className={styles["card__lenght"]}>10:19</p>
        </div>
      </div>
      <div className={styles["card__content"]}>
        <p className={styles["channel__video__name"]}>
          The Backwards Brain Bicycle - Smarter Every Day 133" by Destin Sandlin
        </p>
        <div className={styles["channel__data"]}>
          <div className={styles["channel__img"]}></div>
          <div className={styles["channel__data__text"]}>
            <p className={styles["channel__name"]}>SmarterEveryDay</p>
            <div className={styles["channel__subdata"]}>
              <p className={styles["channel__views"]}>519.7K Views</p>
              <p className={styles["channel__date"]}>3 months ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_pile;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_pile = () => (
         <div>
          <div className="card">
  <div className="card__view">
    <div className="card__view__data">
      <p className="card__view__preview">Preview</p>
      <p className="card__play__icon">
        <svg width="8px" height="8px" viewBox="-0.5 0 7 7" version="1.1">
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)" fill="#000000">
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path fill="#EAECEE" d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322" id="play-[#1003]"></path>
              </g>
            </g>
          </g>
        </svg>
      </p>
      <p className="card__lenght">10:19</p>
    </div>
  </div>
  <div className="card__content">
    <p className="channel__video__name">The Backwards Brain Bicycle - Smarter Every Day 133" by Destin Sandlin</p>
    <div className="channel__data">
      <div className="channel__img"></div>
      <div className="channel__data__text">
        <p className="channel__name">SmarterEveryDay</p>
        <div className="channel__subdata">
          <p className="channel__views">519.7K Views</p>
          <p className="channel__date">3 months ago</p>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_pile;
        
        
         */
}
