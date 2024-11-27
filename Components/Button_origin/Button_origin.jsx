import React from "react";
import styles from "./Button_origin.module.css";

const Button_origin = () => (
  <div>
    <button className={styles["realistic-button"]}>Button</button>
  </div>
);

export default Button_origin;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_origin = () => (
         <div>
          <button className="realistic-button">
  Button
</button>
        </div>
        );

        export default Button_origin;
        
        
         */
}
