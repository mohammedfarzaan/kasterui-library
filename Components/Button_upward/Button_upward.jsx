import React from "react";
import styles from "./Button_upward.module.css";

const Button_upward = () => (
  <div>
    <button className={styles["button"]}>ALT</button>
  </div>
);

export default Button_upward;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_upward = () => (
         <div>
          <button className="button">
ALT
</button>
        </div>
        );

        export default Button_upward;
        
        
         */
}
