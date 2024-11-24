import React from "react";
import styles from "./Button_needs.module.css";

const Button_needs = () => (
  <div>
    <button className={styles["cta"]}>
      <span>Contact Us &nbsp;</span>
      <svg viewBox="0 0 13 10" height="10px" width="15px">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </button>
  </div>
);

export default Button_needs;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_needs = () => (
         <div>
          <button className="cta">
  <span>Contact Us &nbsp;</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
        </div>
        );

        export default Button_needs;
        
        
         */
}