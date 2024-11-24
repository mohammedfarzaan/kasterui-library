import React from "react";
import styles from "./Button_heat.module.css";

const Button_heat = () => (
  <div>
    <button className={styles["button"]}>
      Button
      <span></span>
      <span></span>
    </button>
  </div>
);

export default Button_heat;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_heat = () => (
         <div>
          <button className="button">
  Button
  <span></span>
  <span></span>
</button>
        </div>
        );

        export default Button_heat;
        
        
         */
}