import React from "react";
import styles from "./Button_fish.module.css";

const Button_fish = () => (
  <div>
    <button className={styles["download-btn"] + styles["pixel-corners"]}>
      <div className={styles["button-content"]}>
        <div className={styles["svg-container"]}>
          <svg
            className={styles["download-icon"]}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z"></path>
          </svg>
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["text"]}>Download</div>
        </div>
      </div>
    </button>
  </div>
);

export default Button_fish;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_fish = () => (
         <div>
          <button className="download-btn pixel-corners">
  <div className="button-content">
    <div className="svg-container">
      <svg
        className="download-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z"
        ></path>
      </svg>
    </div>
    <div className="text-container">
      <div className="text">Download</div>
    </div>
  </div>
</button>
        </div>
        );

        export default Button_fish;
        
        
         */
}
