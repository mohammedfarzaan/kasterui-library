import React from "react";
import styles from "./Card_tone.module.css";

const Card_tone = () => (
  <div>
    <div className={styles["pack-container"]}>
      <div className={styles["header"]}>
        <p className={styles["title"]}>Starter</p>
        <div className={styles["price-container"]}>
          <span>$</span>24
          <span>/mo</span>
        </div>
      </div>
      <div>
        <ul className={styles["lists"]}>
          <li className={styles["list"]}>
            <span>
              <svg
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 12.75l6 6 9-13.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            <p>2 team members</p>
          </li>
          <li className={styles["list"]}>
            <span>
              <svg
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 12.75l6 6 9-13.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            <p>100+ components</p>
          </li>
          <li className={styles["list"]}>
            <span>
              <svg
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 12.75l6 6 9-13.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            <p>2 month free updates</p>
          </li>
          <li className={styles["list"]}>
            <span>
              <svg
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 12.75l6 6 9-13.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            <p>Life time technical support</p>
          </li>
        </ul>
      </div>
      <div className={styles["button-container"]}>
        <button type="button">Buy Now</button>
      </div>
    </div>
  </div>
);

export default Card_tone;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_tone = () => (
         <div>
          <div className="pack-container">
  <div className="header">
    <p className="title">
      Starter
    </p>
    <div className="price-container">
      <span>$</span>24
      <span>/mo</span>
    </div>
  </div>
  <div>
    <ul className="lists">
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
          </svg>
        </span>
        <p>
          2 team members
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
          </svg>
        </span>
        <p>
          100+ components
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
          </svg>
        </span>
        <p>
          2 month free updates
        </p>
      </li>
      <li className="list">
        <span>
          <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
          </svg>
        </span>
        <p>
          Life time technical support
        </p>
      </li>
    </ul>
  </div>
  <div className="button-container">
    <button type="button">
      Buy Now
    </button>
  </div>
</div>
        </div>
        );

        export default Card_tone;
        
        
         */
}
