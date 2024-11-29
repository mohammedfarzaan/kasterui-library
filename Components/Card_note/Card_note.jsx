import React from "react";
import styles from "./Card_note.module.css";

const Card_note = () => (
  <div>
    <div className={styles["toast"]}>
      <div className={styles["toast-content"]}>This is a toast message.</div>
      <div className={styles["toast-icon"]}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M15.795 8.342l-5.909 9.545a1 1 0 0 1-1.628 0l-3.182-4.909a1 1 0 0 1 1.629-1.165l2.556 3.953L14.165 7.51a1 1 0 0 1 1.63 1.165z"></path>
        </svg>
      </div>
    </div>
  </div>
);

export default Card_note;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_note = () => (
         <div>
          <div className="toast">
    
    <div className="toast-content">
      This is a toast message.
    </div>
    <div className="toast-icon">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15.795 8.342l-5.909 9.545a1 1 0 0 1-1.628 0l-3.182-4.909a1 1 0 0 1 1.629-1.165l2.556 3.953L14.165 7.51a1 1 0 0 1 1.63 1.165z"></path>
      </svg>
    </div>
  </div>
        </div>
        );

        export default Card_note;
        
        
         */
}
