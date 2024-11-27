import React from "react";
import styles from "./Button_bowl.module.css";

const Button_bowl = () => (
  <div>
    <button className={styles["Btn-container"]}>
      <span className={styles["inner-wrapper"]}>
        <span className={styles["text"]}>
          <p>Upgrade to</p>
          <p className={styles["pro"]}>PRO</p>
        </span>
        <span className={styles["icon"]}>
          <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </span>
      </span>
    </button>
  </div>
);

export default Button_bowl;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_bowl = () => (
         <div>
          <button className="Btn-container">
  <span className="inner-wrapper">
    <span className="text">
      <p>Upgrade to</p>
      <p className="pro">PRO</p>
    </span>
    <span className="icon">
      <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        ></path>
      </svg>
    </span>
  </span>
</button>
        </div>
        );

        export default Button_bowl;
        
        
         */
}
