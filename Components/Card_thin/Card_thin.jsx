import React from "react";
import styles from "./Card_thin.module.css";

const Card_thin = () => (
  <div>
    <a className={styles["card"]} href="">
      <div className={styles["containers"]}>
        <div className={styles["icon-circle"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 29"
            height="29"
            width="28"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#23C55E"
              d="M23.7222 9.04435V6.71102C23.7222 5.42235 22.6775 4.37769 21.3888 4.37769L6.61106 4.37769C5.32239 4.37769 4.27773 5.42235 4.27773 6.71102V9.04435C4.27773 10.333 5.32239 11.3777 6.61106 11.3777H21.3888C22.6775 11.3777 23.7222 10.333 23.7222 9.04435Z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#23C55E"
              d="M23.7222 21.4888V19.1555C23.7222 17.8668 22.6775 16.8221 21.3888 16.8221H15.9444C14.6557 16.8221 13.6111 17.8668 13.6111 19.1555V21.4888C13.6111 22.7775 14.6557 23.8221 15.9444 23.8221H21.3888C22.6775 23.8221 23.7222 22.7775 23.7222 21.4888Z"
            ></path>
          </svg>
        </div>
        <div className={styles["title"] + styles["mb-3"]}>
          Easy For Everyoness
        </div>
        <div className={styles["subtitle"]}>
          Every year, we award travelers’ favorite destinations, hotels,
          restaurants, and things to do around the world.
        </div>
        <div className={styles["btnRound"] + styles["btnService"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 19 18"
            height="18"
            width="19"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#23C55E"
              d="M3.51141 2.78405L14.9344 6.95805C15.4154 7.13405 15.4014 7.81905 14.9134 7.97605L9.68541 9.64905L8.01241 14.8771C7.85641 15.3651 7.17041 15.3791 6.99441 14.8981L2.82141 3.47405C2.66441 3.04405 3.08141 2.62705 3.51141 2.78405Z"
            ></path>
          </svg>
        </div>
      </div>
    </a>
  </div>
);

export default Card_thin;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_thin = () => (
         <div>
          <a className="card" href="">
  <div className="containers">
    <div className="icon-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 28 29"
        height="29"
        width="28"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          stroke="#23C55E"
          d="M23.7222 9.04435V6.71102C23.7222 5.42235 22.6775 4.37769 21.3888 4.37769L6.61106 4.37769C5.32239 4.37769 4.27773 5.42235 4.27773 6.71102V9.04435C4.27773 10.333 5.32239 11.3777 6.61106 11.3777H21.3888C22.6775 11.3777 23.7222 10.333 23.7222 9.04435Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          stroke="#23C55E"
          d="M23.7222 21.4888V19.1555C23.7222 17.8668 22.6775 16.8221 21.3888 16.8221H15.9444C14.6557 16.8221 13.6111 17.8668 13.6111 19.1555V21.4888C13.6111 22.7775 14.6557 23.8221 15.9444 23.8221H21.3888C22.6775 23.8221 23.7222 22.7775 23.7222 21.4888Z"
        ></path>
      </svg>
    </div>
    <div className="title mb-3">Easy For Everyoness</div>
    <div className="subtitle">
      Every year, we award travelers’ favorite destinations, hotels,
      restaurants, and things to do around the world.
    </div>
    <div className="btnRound btnService">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 19 18"
        height="18"
        width="19"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          stroke="#23C55E"
          d="M3.51141 2.78405L14.9344 6.95805C15.4154 7.13405 15.4014 7.81905 14.9134 7.97605L9.68541 9.64905L8.01241 14.8771C7.85641 15.3651 7.17041 15.3791 6.99441 14.8981L2.82141 3.47405C2.66441 3.04405 3.08141 2.62705 3.51141 2.78405Z"
        ></path>
      </svg>
    </div>
  </div>
</a>
        </div>
        );

        export default Card_thin;
        
        
         */
}
