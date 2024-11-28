import React from "react";
import styles from "./Button_birds.module.css";

const Button_birds = () => (
  <div>
    <button className={styles["space-button"]}>
      <span>Explore space</span>
      <svg viewBox="0 0 24 24">
        <path d="M5.5 16.5l5-5-5-5"></path>
        <path d="M11 11h8v2h-8z"></path>
        <path d="M16.5 7.5l5-5-5-5"></path>
        <path d="M19 4v8h-2v-8z"></path>
      </svg>
    </button>
  </div>
);

export default Button_birds;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_birds = () => (
         <div>
          <button className="space-button">
  <span>Explore space</span>
  <svg viewBox="0 0 24 24">
    <path d="M5.5 16.5l5-5-5-5"></path>
    <path d="M11 11h8v2h-8z"></path>
    <path d="M16.5 7.5l5-5-5-5"></path>
    <path d="M19 4v8h-2v-8z"></path>
  </svg>
</button>
        </div>
        );

        export default Button_birds;
        
        
         */
}
