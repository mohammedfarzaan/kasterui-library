import React from "react";
import styles from "./Card_wrong.module.css";

const Card_wrong = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__icons"]}>
        <svg
          className={styles["svg-icon"]}
          height="100"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 100 100"
          width="100"
          x="0"
          xmlns="http://www.w3.org/2000/svg"
          y="0"
        >
          <path
            d="M50,35.7V50L60.7,60.7M82.1,50A32.1,32.1,0,1,1,50,17.9,32.1,32.1,0,0,1,82.1,50Z"
            strokeWidth="8"
          ></path>
        </svg>
        <svg
          className={styles["svg-icon"]}
          height="100"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 100 100"
          width="100"
          x="0"
          xmlns="http://www.w3.org/2000/svg"
          y="0"
        >
          <path
            d="M17.7,28.5H82.3a5.4,5.4,0,0,0,5.4-5.4,5.4,5.4,0,0,0-5.4-5.4H17.7a5.4,5.4,0,0,0-5.4,5.4A5.4,5.4,0,0,0,17.7,28.5Z"
            fillRule="evenodd"
          ></path>
          <path
            d="M82.3,44.6H17.7a5.4,5.4,0,0,0,0,10.8H82.3a5.4,5.4,0,1,0,0-10.8Z"
            fillRule="evenodd"
          ></path>
          <path
            d="M50,71.5H17.7a5.4,5.4,0,0,0-5.4,5.4,5.4,5.4,0,0,0,5.4,5.4H50a5.4,5.4,0,0,0,5.4-5.4A5.4,5.4,0,0,0,50,71.5Z"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className={styles["card__time"]}>
        <p>10:12</p>
      </div>
    </div>
  </div>
);

export default Card_wrong;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_wrong = () => (
         <div>
          <div className="card">
  <div className="card__icons">
    <svg className="svg-icon" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
    <path d="M50,35.7V50L60.7,60.7M82.1,50A32.1,32.1,0,1,1,50,17.9,32.1,32.1,0,0,1,82.1,50Z" strokeWidth="8">
    </path>
    </svg>
    <svg className="svg-icon" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
      <path d="M17.7,28.5H82.3a5.4,5.4,0,0,0,5.4-5.4,5.4,5.4,0,0,0-5.4-5.4H17.7a5.4,5.4,0,0,0-5.4,5.4A5.4,5.4,0,0,0,17.7,28.5Z" fillRule="evenodd">
      </path>
      <path d="M82.3,44.6H17.7a5.4,5.4,0,0,0,0,10.8H82.3a5.4,5.4,0,1,0,0-10.8Z" fillRule="evenodd">
      </path>
      <path d="M50,71.5H17.7a5.4,5.4,0,0,0-5.4,5.4,5.4,5.4,0,0,0,5.4,5.4H50a5.4,5.4,0,0,0,5.4-5.4A5.4,5.4,0,0,0,50,71.5Z" fillRule="evenodd">
      </path>
    </svg>
  </div>
  <div className="card__time">
  <p>10:12</p>
  </div>
</div>
        </div>
        );

        export default Card_wrong;
        
        
         */
}
