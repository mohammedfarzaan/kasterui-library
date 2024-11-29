import React from "react";
import styles from "./Card_needed.module.css";

const Card_needed = () => (
  <div>
    <div className={styles["card"]}>
      <button type="button" className={styles["dismiss"]}>
        ×
      </button>
      <div className={styles["header"]}>
        <div className={styles["image"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              id="SVGRepo_tracerCarrier"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                stroke="#000000"
                d="M20 7L9.00004 18L3.99994 13"
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
          <button type="button" className={styles["history"]}>
            History
          </button>
          <button type="button" className={styles["track"]}>
            Track my package
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Card_needed;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_needed = () => (
         <div>
          <div className="card"> 
  <button type="button" className="dismiss">×</button> 
  <div className="header"> 
    <div className="image">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#000000" d="M20 7L9.00004 18L3.99994 13"></path> </g></svg>
      </div> 
      <div className="content">
         <span className="title">Order validated</span> 
         <p className="message">Thank you for your purchase. you package will be delivered within 2 days of your purchase</p> 
         </div> 
         <div className="actions">
            <button type="button" className="history">History</button> 
            <button type="button" className="track">Track my package</button> 
            </div> 
            </div> 
            </div>
        </div>
        );

        export default Card_needed;
        
        
         */
}
