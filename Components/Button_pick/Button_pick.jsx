import React from "react";
import styles from "./Button_pick.module.css";

const Button_pick = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="26px"
      >
        <path
          d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_pick;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_pick = () => (
         <div>
          <button className="button">
  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
</button>
        </div>
        );

        export default Button_pick;
        
        
         */
}
