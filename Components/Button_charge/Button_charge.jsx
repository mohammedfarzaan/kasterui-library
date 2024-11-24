import React from "react";
import styles from "./Button_charge.module.css";

const Button_charge = () => (
  <div>
    <button role="button" className={styles["button"]}>
      Hover Me
    </button>
  </div>
);

export default Button_charge;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_charge = () => (
         <div>
          <button role="button" className="button">Hover Me</button>
        </div>
        );

        export default Button_charge;
        
        
         */
}