import React from "react";
import styles from "./Button_dirt.module.css";

const Button_dirt = () => (
  <div>
    <button className={styles["button"]}>
      <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,72a12,12,0,1,0-12-12A12,12,0,0,0,128,72Zm0,112a12,12,0,1,0,12,12A12,12,0,0,0,128,184Z"></path>
      </svg>
    </button>
  </div>
);

export default Button_dirt;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_dirt = () => (
         <div>
          <button className="button">
  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,72a12,12,0,1,0-12-12A12,12,0,0,0,128,72Zm0,112a12,12,0,1,0,12,12A12,12,0,0,0,128,184Z"></path></svg>
</button>
        </div>
        );

        export default Button_dirt;
        
        
         */
}
