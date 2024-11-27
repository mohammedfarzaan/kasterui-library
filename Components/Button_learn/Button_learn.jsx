import React from "react";
import styles from "./Button_learn.module.css";

const Button_learn = () => (
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

export default Button_learn;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_learn = () => (
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

        export default Button_learn;
        
        
         */
}
