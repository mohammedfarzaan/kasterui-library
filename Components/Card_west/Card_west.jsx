import React from "react";
import styles from "./Card_west.module.css";

const Card_west = () => (
  <div>
    <div className={styles["card"]}>
      <div data-position="top" className={styles["carousel"]}>
        <span className={styles["carousel__text"]}>
          • card component • card component • card component • card component •
          card component • card component
        </span>
      </div>
      <div className={styles["image"]}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
        </svg>
      </div>
      <span className={styles["title"]}>Highlight Curation</span>
      <p className={styles["paragraph"]}>
        Works autonomously through artificial intelligent and hundred of
        micro-services
      </p>
      <div
        data-direction="right"
        data-position="bottom"
        className={styles["carousel"]}
      >
        <span className={styles["carousel__text"]}>
          • card component • card component • card component • card component •
          card component • card component
        </span>
      </div>
    </div>
  </div>
);

export default Card_west;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_west = () => (
         <div>
          <div className="card">
  <div data-position="top" className="carousel">
    <span className="carousel__text"
      >• card component • card component • card component • card component •
      card component • card component</span
    >
  </div>
  <div className="image">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
      ></path>
    </svg>
  </div>
  <span className="title">Highlight Curation</span>
  <p className="paragraph">
    Works autonomously through artificial intelligent and hundred of
    micro-services
  </p>
  <div data-direction="right" data-position="bottom" className="carousel">
    <span className="carousel__text"
      >• card component • card component • card component • card component •
      card component • card component</span
    >
  </div>
</div>
        </div>
        );

        export default Card_west;
        
        
         */
}
