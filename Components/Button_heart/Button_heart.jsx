import React from "react";
import styles from "./Button_heart.module.css";

const Button_heart = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        className="svg-icon"
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#ff2849" strokeLinecap="round" strokeWidth="2">
          <rect height="14" rx="1.5" width="3" x="15" y="5"></rect>
          <rect height="14" rx="1.5" width="3" x="6" y="5"></rect>
        </g>
      </svg>
      <span className={styles["label"]}>Pause</span>
    </button>
  </div>
);

export default Button_heart;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_heart = () => (
         <div>
          <button className="button">
  <svg className="svg-icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#ff2849" strokeLinecap="round" strokeWidth="2"><rect height="14" rx="1.5" width="3" x="15" y="5"></rect><rect height="14" rx="1.5" width="3" x="6" y="5"></rect></g></svg>
  <span className="label">Pause</span>
</button>
        </div>
        );

        export default Button_heart;
        
        
         */
}
