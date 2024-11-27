import React from "react";
import styles from "./Button_gate.module.css";

const Button_gate = () => (
  <div>
    <button className={styles["complex-button"]}>HOVER ME</button>
  </div>
);

export default Button_gate;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_gate = () => (
         <div>
          <button className="complex-button">HOVER ME</button>
        </div>
        );

        export default Button_gate;
        
        
         */
}
