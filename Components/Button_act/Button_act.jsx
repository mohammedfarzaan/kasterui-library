import React from "react";
import styles from "./Button_act.module.css";

const Button_act = () => (
  <div>
    <button type="button" className={styles["button"]}>
      <span className={styles["button__text"]}>Add Item</span>
      <span className={styles["button__icon"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke="currentColor"
          height="24"
          fill="none"
          className={styles["svg"]}
        >
          <line y2="19" y1="5" x2="12" x1="12"></line>
          <line y2="12" y1="12" x2="19" x1="5"></line>
        </svg>
      </span>
    </button>
  </div>
);

export default Button_act;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_act = () => (
         <div>
          <button type="button" className="button">
  <span className="button__text">Add Item</span>
  <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" className="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
</button>
        </div>
        );

        export default Button_act;
        
        
         */
}
