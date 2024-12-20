import React from "react";
import styles from "./Card_key.module.css";

const Card_key = () => (
  <div>
    <div className={styles["card-container"]}>
      <div className={styles["card-box"]}>
        <div className={styles["card-head"]}>
          <div className={styles["card-chip"]}>
            <svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.813 2C2.647 2 0 4.648 0 7.813v10.375C0 21.352 2.648 24 5.813 24h14.375C23.352 24 26 21.352 26 18.187V7.813C26 4.649 23.352 2 20.187 2H5.813zm0 2h14.375C22.223 4 24 5.777 24 7.813V9h-6c-.555 0-1-.445-1-1c0-.555.445-1 1-1a1 1 0 1 0 0-2c-1.645 0-3 1.355-3 3c0 1.292.844 2.394 2 2.813v4.968c-1.198.814-2 2.18-2 3.719c0 .923.293 1.781.781 2.5H10.22a4.439 4.439 0 0 0 .78-2.5c0-1.538-.802-2.905-2-3.719v-4.969c1.156-.418 2-1.52 2-2.812c0-1.645-1.355-3-3-3H6a1 1 0 0 0-.094 0a1.001 1.001 0 0 0-.093 0A1.004 1.004 0 0 0 6 7h2c.555 0 1 .445 1 1c0 .555-.445 1-1 1H2V7.812C2 5.777 3.777 4 5.813 4zM2 11h5v4H2v-4zm17 0h5v4h-5v-4zM2 17h4.5C7.839 17 9 18.161 9 19.5S7.839 22 6.5 22h-.688C3.777 22 2 20.223 2 18.187V17zm17.5 0H24v1.188C24 20.223 22.223 22 20.187 22H19.5c-1.339 0-2.5-1.161-2.5-2.5s1.161-2.5 2.5-2.5z"
                fill="currentcolor"
              ></path>
            </svg>
          </div>
          <div className={styles["card-logo"]}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fillRule="evenodd" fill="none">
                <circle r="7" fill="#ea001b" cy="12" cx="7"></circle>
                <circle
                  r="7"
                  fill-opacity=".8"
                  fill="#ffa200"
                  cy="12"
                  cx="17"
                ></circle>
              </g>
            </svg>
          </div>
        </div>
        <div className={styles["card-number-row"]}>
          <span>6037 1234 4567 8910</span>
        </div>
        <div className={styles["card-details"]}>
          <div className={styles["card-holder-col"]}>
            <span className={styles["card-holder-title"]}>CARD HOLDER</span>
            <span className={styles["card-holder-name"]}>ALI ABDI</span>
          </div>
          <div className={styles["card-date-col"]}>
            <span className={styles["card-date-title"]}>VALID THRU</span>
            <span className={styles["card-date-sub"]}>06/26</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_key;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_key = () => (
         <div>
          <div className="card-container">
  <div className="card-box">
    <div className="card-head">
      <div className="card-chip">
        <svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.813 2C2.647 2 0 4.648 0 7.813v10.375C0 21.352 2.648 24 5.813 24h14.375C23.352 24 26 21.352 26 18.187V7.813C26 4.649 23.352 2 20.187 2H5.813zm0 2h14.375C22.223 4 24 5.777 24 7.813V9h-6c-.555 0-1-.445-1-1c0-.555.445-1 1-1a1 1 0 1 0 0-2c-1.645 0-3 1.355-3 3c0 1.292.844 2.394 2 2.813v4.968c-1.198.814-2 2.18-2 3.719c0 .923.293 1.781.781 2.5H10.22a4.439 4.439 0 0 0 .78-2.5c0-1.538-.802-2.905-2-3.719v-4.969c1.156-.418 2-1.52 2-2.812c0-1.645-1.355-3-3-3H6a1 1 0 0 0-.094 0a1.001 1.001 0 0 0-.093 0A1.004 1.004 0 0 0 6 7h2c.555 0 1 .445 1 1c0 .555-.445 1-1 1H2V7.812C2 5.777 3.777 4 5.813 4zM2 11h5v4H2v-4zm17 0h5v4h-5v-4zM2 17h4.5C7.839 17 9 18.161 9 19.5S7.839 22 6.5 22h-.688C3.777 22 2 20.223 2 18.187V17zm17.5 0H24v1.188C24 20.223 22.223 22 20.187 22H19.5c-1.339 0-2.5-1.161-2.5-2.5s1.161-2.5 2.5-2.5z"
            fill="currentcolor"
          ></path>
        </svg>
      </div>
      <div className="card-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g fillRule="evenodd" fill="none">
            <circle r="7" fill="#ea001b" cy="12" cx="7"></circle>
            <circle
              r="7"
              fill-opacity=".8"
              fill="#ffa200"
              cy="12"
              cx="17"
            ></circle>
          </g>
        </svg>
      </div>
    </div>
    <div className="card-number-row">
      <span>6037 1234 4567 8910</span>
    </div>
    <div className="card-details">
      <div className="card-holder-col">
        <span className="card-holder-title">CARD HOLDER</span>
        <span className="card-holder-name">ALI ABDI</span>
      </div>
      <div className="card-date-col">
        <span className="card-date-title">VALID THRU</span>
        <span className="card-date-sub">06/26</span>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_key;
        
        
         */
}
