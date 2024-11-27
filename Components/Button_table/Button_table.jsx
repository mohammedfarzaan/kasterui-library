import React from "react";
import styles from "./Button_table.module.css";

const Button_table = () => (
  <div>
    <button className={styles["swipe-button"]}>Hover Me</button>
  </div>
);

export default Button_table;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_table = () => (
         <div>
          <button className="swipe-button">Hover Me</button>
        </div>
        );

        export default Button_table;
        
        
         */
}
