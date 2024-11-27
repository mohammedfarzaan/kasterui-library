import React from "react";
import styles from "./Button_same.module.css";

const Button_same = () => (
  <div>
    <button className={styles["swallow__icon"]}>
      <span></span>
    </button>
  </div>
);

export default Button_same;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_same = () => (
         <div>
          <button className="swallow__icon">
  <span></span>
</button>
        </div>
        );

        export default Button_same;
        
        
         */
}
