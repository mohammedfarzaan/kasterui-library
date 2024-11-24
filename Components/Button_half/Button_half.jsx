import React from "react";
import styles from "./Button_half.module.css";

const Button_half = () => (
  <div>
    <button className={styles["button"]}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
        <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
      </svg>
      Unlock Pro
    </button>
  </div>
);

export default Button_half;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_half = () => (
         <div>
          <button className="button">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
        <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
    </svg>
    Unlock Pro
</button>
        </div>
        );

        export default Button_half;
        
        
         */
}
