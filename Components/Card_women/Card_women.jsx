import React from "react";
import styles from "./Card_women.module.css";

const Card_women = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__info"]}>
        <div className={styles["card__logo"]}>MasterCard</div>
        <div className={styles["card__chip"]}>
          <svg
            className={styles["card__chip-lines"]}
            role="img"
            width="20px"
            height="20px"
            viewBox="0 0 100 100"
            aria-label="Chip"
          >
            <g opacity="0.8">
              <polyline
                points="0,50 35,50"
                fill="none"
                stroke="#000"
                strokeWidth="2"
              ></polyline>
              <polyline
                points="0,20 20,20 35,35"
                fill="none"
                stroke="#000"
                strokeWidth="2"
              ></polyline>
              <polyline
                points="50,0 50,35"
                fill="none"
                stroke="#000"
                strokeWidth="2"
              ></polyline>
              <polyline
                points="65,35 80,20 100,20"
                fill="none"
                stroke="#000"
                strokeWidth="2"
              ></polyline>
              <polyline
                points="100,50 65,50"
                fill="none"
                stroke="#000"
                strokeWidth="2"
              ></polyline>
              <polyline
                points="35,35 65,35 65,65 35,65 35,35"
                fill="none"
                stroke="#000"
                strokeWidth="2"
              ></polyline>
              <polyline
                points="0,80 20,80 35,65"
                fill="none"
                stroke="#000"
                strokeWidth="2"
              ></polyline>
              <polyline
                points="50,100 50,65"
                fill="none"
                stroke="#000"
                strokeWidth="2"
              ></polyline>
              <polyline
                points="65,65 80,80 100,80"
                fill="none"
                stroke="#000"
                strokeWidth="2"
              ></polyline>
            </g>
          </svg>
          <div className={styles["card__chip-texture"]}></div>
        </div>
        <div className={styles["card__type"]}>debit</div>
        <div className={styles["card__number"]}>
          <span className={styles["card__digit-group"]}>0123</span>
          <span className={styles["card__digit-group"]}>4567</span>
          <span className={styles["card__digit-group"]}>8901</span>
          <span className={styles["card__digit-group"]}>2345</span>
        </div>
        <div className={styles["card__valid-thru"]} aria-label="Valid thru">
          Valid
          <br />
          thru
        </div>
        <div className={styles["card__exp-date"]}>
          <time datetime="2038-01">01/38</time>
        </div>
        <div className={styles["card__name"]} aria-label="Dee Stroyer">
          Jk Huger
        </div>
        <div
          className={styles["card__vendor"]}
          role="img"
          aria-labelledby="card-vendor"
        >
          <span id="card-vendor" className={styles["card__vendor-sr"]}>
            Mastercard
          </span>
        </div>
        <div className={styles["card__texture"]}></div>
      </div>
    </div>
  </div>
);

export default Card_women;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_women = () => (
         <div>
          <div className="card">
<div className="card__info">
    <div className="card__logo">MasterCard</div>
    <div className="card__chip">
        <svg className="card__chip-lines" role="img" width="20px" height="20px" viewBox="0 0 100 100" aria-label="Chip">
            <g opacity="0.8">
                <polyline points="0,50 35,50" fill="none" stroke="#000" strokeWidth="2"></polyline>
                <polyline points="0,20 20,20 35,35" fill="none" stroke="#000" strokeWidth="2"></polyline>
                <polyline points="50,0 50,35" fill="none" stroke="#000" strokeWidth="2"></polyline>
                <polyline points="65,35 80,20 100,20" fill="none" stroke="#000" strokeWidth="2"></polyline>
                <polyline points="100,50 65,50" fill="none" stroke="#000" strokeWidth="2"></polyline>
                <polyline points="35,35 65,35 65,65 35,65 35,35" fill="none" stroke="#000" strokeWidth="2"></polyline>
                <polyline points="0,80 20,80 35,65" fill="none" stroke="#000" strokeWidth="2"></polyline>
                <polyline points="50,100 50,65" fill="none" stroke="#000" strokeWidth="2"></polyline>
                <polyline points="65,65 80,80 100,80" fill="none" stroke="#000" strokeWidth="2"></polyline>
            </g>
        </svg>
        <div className="card__chip-texture"></div>
    </div>
      <div className="card__type">debit</div>
      <div className="card__number">
        <span className="card__digit-group">0123</span>
        <span className="card__digit-group">4567</span>
        <span className="card__digit-group">8901</span>
        <span className="card__digit-group">2345</span>
    </div>
      <div className="card__valid-thru" aria-label="Valid thru">Valid<br />thru</div>
      <div className="card__exp-date"><time datetime="2038-01">01/38</time></div>
      <div className="card__name" aria-label="Dee Stroyer">Jk Huger</div>
      <div className="card__vendor" role="img" aria-labelledby="card-vendor">
      <span id="card-vendor" className="card__vendor-sr">Mastercard</span>
    </div>
<div className="card__texture"></div>
        </div>
            </div>
        </div>
        );

        export default Card_women;
        
        
         */
}
