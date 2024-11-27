import React from "react";
import styles from "./Button_must.module.css";

const Button_must = () => (
  <div>
    <button className={styles["custom-btn"] + styles["btn"]}>
      <span>Button</span>
    </button>
  </div>
);

export default Button_must;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_must = () => (
         <div>
          <button className="custom-btn btn"><span>Button</span></button>
        </div>
        );

        export default Button_must;
        
        
         */
}
