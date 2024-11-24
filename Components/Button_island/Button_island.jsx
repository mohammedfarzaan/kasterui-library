import React from "react";
import styles from "./Button_island.module.css";

const Button_island = () => (
  <div>
    <button className={styles["btn"] + styles["draw-border"]}>Button</button>
  </div>
);

export default Button_island;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_island = () => (
         <div>
          <button className="btn draw-border">Button</button>
        </div>
        );

        export default Button_island;
        
        
         */
}
