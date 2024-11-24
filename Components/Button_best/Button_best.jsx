import React from "react";
import styles from "./Button_best.module.css";

const Button_best = () => (
  <div>
    <button className={styles["Btn"]}>
      SKIP
      <svg viewBox="0 0 320 512" className={styles["svg"]}>
        <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"></path>
      </svg>
    </button>
  </div>
);

export default Button_best;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_best = () => (
         <div>
          <button className="Btn">
  SKIP
  <svg viewBox="0 0 320 512" className="svg">
    <path
      d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"
    ></path>
  </svg>
</button>
        </div>
        );

        export default Button_best;
        
        
         */
}
