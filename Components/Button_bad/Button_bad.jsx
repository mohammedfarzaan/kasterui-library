import React from "react";
import styles from "./Button_bad.module.css";

const Button_bad = () => (
  <div>
    <button className={styles["full-rounded"]}>
      <span>Hover me</span>
      <div className={styles["border"] + styles["full-rounded"]}></div>
    </button>
  </div>
);

export default Button_bad;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_bad = () => (
         <div>
          <button className="full-rounded">
<span>Hover me</span>
<div className="border full-rounded"></div></button>
        </div>
        );

        export default Button_bad;
        
        
         */
}
