import React from "react";
import styles from "./Input_burn.module.css";

const Input_burn = () => (
  <div>
    <div className={styles["inputBox_container"]}>
      <svg
        className={styles["search_icon"]}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        alt="search icon"
      >
        <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z"></path>
      </svg>
      <input
        className={styles["inputBox"]}
        id="inputBox"
        type="text"
        placeholder="Search For Products"
      />
    </div>
  </div>
);

export default Input_burn;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_burn = () => (
         <div>
          <div className="inputBox_container">
  <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
    <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
    </path>
  </svg>
  <input className="inputBox" id="inputBox" type="text" placeholder="Search For Products" />
</div>
        </div>
        );

        export default Input_burn;
        
        
         */
}
