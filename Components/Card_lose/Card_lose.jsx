import React from "react";
import styles from "./Card_lose.module.css";

const Card_lose = () => (
  <div>
    <div className={styles["card"]}>
      <button className={styles["dismiss"]} type="button">
        ×
      </button>
      <div className={styles["header"]}>
        <div className={styles["image"]}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M20 7L9.00004 18L3.99994 13"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className={styles["content"]}>
          <span className={styles["title"]}>Order validated</span>
          <p className={styles["message"]}>
            Thank you for your purchase. you package will be delivered within 2
            days of your purchase
          </p>
        </div>
        <div className={styles["actions"]}>
          <button className={styles["history"]} type="button">
            History
          </button>
          <button className={styles["track"]} type="button">
            Track my package
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Card_lose;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_lose = () => (
         <div>
          <div className="card"> 
  <button className="dismiss" type="button">×</button> 
  <div className="header"> 
    <div className="image">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      </div> 
      <div className="content">
         <span className="title">Order validated</span> 
         <p className="message">Thank you for your purchase. you package will be delivered within 2 days of your purchase</p> 
         </div> 
         <div className="actions">
            <button className="history" type="button">History</button> 
            <button className="track" type="button">Track my package</button> 
            </div> 
            </div> 
            </div>
        </div>
        );

        export default Card_lose;
        
        
         */
}
