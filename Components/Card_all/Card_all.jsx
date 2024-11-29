import React from "react";
import styles from "./Card_all.module.css";

const Card_all = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <div className={styles["card__image-container"]}></div>

        <svg className={styles["card__svg"]} viewBox="0 0 800 500">
          <path
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
            stroke="transparent"
            fill="#333"
          ></path>
          <path
            className={styles["card__line"]}
            d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
            stroke="pink"
            strokeWidth="3"
            fill="transparent"
          ></path>
        </svg>

        <div className={styles["card__content"]}>
          <p className={styles["card__title"]}>Lorem ipsum</p>
          <p>
            Soluta dolor praesentium at quod autem omnis, amet earum nesciunt
            porro.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Card_all;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_all = () => (
         <div>
          <div className="container">
  <div className="card">
     <div className="card__image-container">
    </div>
      
      <svg className="card__svg" viewBox="0 0 800 500">

        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"></path>
        <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"></path>
      </svg>
    
     <div className="card__content">
       <p className="card__title">Lorem ipsum</p>
     <p>Soluta dolor praesentium at quod autem omnis, amet earum nesciunt porro.</p>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_all;
        
        
         */
}
