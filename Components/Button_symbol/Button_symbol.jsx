import React from "react";
import styles from "./Button_symbol.module.css";

const Button_symbol = () => (
  <div>
    <button className={styles["button"]}>Hover Button</button>
  </div>
);

export default Button_symbol;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_symbol = () => (
         <div>
          <button className="button">
       Hover Button
    </button>
        </div>
        );

        export default Button_symbol;
        
        
         */
}
