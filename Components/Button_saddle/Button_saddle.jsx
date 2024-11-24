import React from "react";
import styles from "./Button_saddle.module.css";

const Button_saddle = () => (
  <div>
    <button className={styles["button"]}>ctrl</button>
  </div>
);

export default Button_saddle;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_saddle = () => (
         <div>
          <button className="button">
  ctrl
</button>
        </div>
        );

        export default Button_saddle;
        
        
         */
}
