import React from "react";
import styles from "./Button_per.module.css";

const Button_per = () => (
  <div>
    <button className={styles["button"]}>BUTTON</button>
  </div>
);

export default Button_per;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_per = () => (
         <div>
          <button className="button">
  BUTTON
</button>
        </div>
        );

        export default Button_per;
        
        
         */
}
