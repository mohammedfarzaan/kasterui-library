import React from "react";
import styles from "./Card_stone.module.css";

const Card_stone = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-img"]}></div>
      <div className={styles["card-info"]}>
        <div className={styles["card-text"]}>
          <p className={styles["text-title"]}>This is a title</p>
          <p className={styles["text-subtitle"]}>This is a subtitle</p>
        </div>
        <div className={styles["card-icon"]}>
          <svg viewBox="0 0 28 25" className={styles["icon"]}>
            <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default Card_stone;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_stone = () => (
         <div>
          <div className="card">
<div className="card-img"></div>
  <div className="card-info">
    <div className="card-text">
      <p className="text-title">This is a title</p>
      <p className="text-subtitle">This is a subtitle</p>
    </div>
    <div className="card-icon">
      <svg viewBox="0 0 28 25" className="icon">
        <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
      </svg>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_stone;
        
        
         */
}
