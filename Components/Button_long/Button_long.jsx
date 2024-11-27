import React from "react";
import styles from "./Button_long.module.css";

const Button_long = () => (
  <div>
    <button className={styles["btn-space"] + styles["space"]}>Button</button>
  </div>
);

export default Button_long;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_long = () => (
         <div>
          <button className="btn-space space">
  Button
</button>
        </div>
        );

        export default Button_long;
        
        
         */
}
