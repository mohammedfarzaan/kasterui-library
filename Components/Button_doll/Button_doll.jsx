import React from "react";
import styles from "./Button_doll.module.css";

const Button_doll = () => (
  <div>
    <button className={styles["btn-1"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Button
    </button>
  </div>
);

export default Button_doll;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_doll = () => (
         <div>
          <button className="btn-1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Button
    </button>
        </div>
        );

        export default Button_doll;
        
        
         */
}
