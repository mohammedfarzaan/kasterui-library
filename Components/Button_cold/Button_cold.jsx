import React from "react";
import styles from "./Button_cold.module.css";

const Button_cold = () => (
  <div>
    <button className={styles["btn"]}>Hover Me</button>
  </div>
);

export default Button_cold;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_cold = () => (
         <div>
          <button className="btn">Hover Me</button>
        </div>
        );

        export default Button_cold;
        
        
         */
}
