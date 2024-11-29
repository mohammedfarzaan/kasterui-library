import React from "react";
import styles from "./Card_sound.module.css";

const Card_sound = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["left-side"]}>
        <div className={styles["card"]}>
          <div className={styles["card-line"]}></div>
          <div className={styles["buttons"]}></div>
        </div>
        <div className={styles["post"]}>
          <div className={styles["post-line"]}></div>
          <div className={styles["screen"]}>
            <div className={styles["dollar"]}>$</div>
          </div>
          <div className={styles["numbers"]}></div>
          <div className={styles["numbers-line2"]}></div>
        </div>
      </div>
      <div className={styles["right-side"]}>
        <div className={styles["new"]}>New Transaction</div>

        <svg
          viewBox="0 0 451.846 451.847"
          height="512"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["arrow"]}
        >
          <path
            fill="#cfcfcf"
            data-old_color="#000000"
            className={styles["active-path"]}
            data-original="#000000"
            d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
);

export default Card_sound;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_sound = () => (
         <div>
          <div className="container">
 <div className="left-side">
  <div className="card">
   <div className="card-line"></div>
   <div className="buttons"></div>
  </div>
  <div className="post">
   <div className="post-line"></div>
   <div className="screen">
    <div className="dollar">$</div>
   </div>
   <div className="numbers"></div>
   <div className="numbers-line2"></div>
  </div>
 </div>
 <div className="right-side">
  <div className="new">New Transaction</div>
  
   <svg viewBox="0 0 451.846 451.847" height="512" width="512" xmlns="http://www.w3.org/2000/svg" className="arrow"><path fill="#cfcfcf" data-old_color="#000000" className="active-path" data-original="#000000" d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"></path></svg>
 
 </div>
</div>
        </div>
        );

        export default Card_sound;
        
        
         */
}
