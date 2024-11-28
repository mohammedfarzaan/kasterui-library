import React from "react";
import styles from "./Button_move.module.css";

const Button_move = () => (
  <div>
    <button className={styles["open-file"]}>
      <span className={styles["file-wrapper"]}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 71 67">
          <path
            strokeWidth="5"
            stroke="black"
            d="M41.7322 11.7678L42.4645 12.5H43.5H68.5V64.5H2.5V2.5H32.4645L41.7322 11.7678Z"
          ></path>
        </svg>
        <span className={styles["file-front"]}></span>
      </span>
      Open file
    </button>
  </div>
);

export default Button_move;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_move = () => (
         <div>
          <button className="open-file">
  <span className="file-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 71 67">
      <path
        strokeWidth="5"
        stroke="black"
        d="M41.7322 11.7678L42.4645 12.5H43.5H68.5V64.5H2.5V2.5H32.4645L41.7322 11.7678Z"
      ></path>
    </svg>
    <span className="file-front"></span>
  </span>
  Open file
</button>
        </div>
        );

        export default Button_move;
        
        
         */
}
