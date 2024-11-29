import React from "react";
import styles from "./Card_upward.module.css";

const Card_upward = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["icon"]}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
              stroke="#ffffff"
              d="M20 14V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V14M12 15L12 3M12 15L8 11M12 15L16 11"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <div className={styles["content"]}>
        <span className={styles["title"]}>Good news Mac users!</span>
        <div className={styles["desc"]}>
          This software is now available for download.
        </div>
        <div className={styles["actions"]}>
          <div>
            <a href="#" className={styles["download"]}>
              Try it free
            </a>
          </div>
          <div>
            <a href="#" className={styles["notnow"]}>
              Not now
            </a>
          </div>
        </div>
      </div>
      <button type="button" className={styles["close"]}>
        <svg
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
);

export default Card_upward;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_upward = () => (
         <div>
          <div className="card">
        <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#ffffff" d="M20 14V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V14M12 15L12 3M12 15L8 11M12 15L16 11"></path> </g></svg>
        </div>
        <div className="content">
            <span className="title">Good news Mac users!</span>
            <div className="desc">This software is now available for download.</div> 
            <div className="actions">
                <div>
                    <a href="#" className="download">Try it free</a>
                </div>
                <div>
                    <a href="#" className="notnow">Not now</a> 
                </div>
            </div>    
        </div>
        <button type="button" className="close">
            <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
</div>
        </div>
        );

        export default Card_upward;
        
        
         */
}
