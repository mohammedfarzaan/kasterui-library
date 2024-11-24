import React from "react";
import styles from "./Button_stiff.module.css";

const Button_stiff = () => (
  <div>
    <div className={styles["container"]}>
      <button className={styles["button"]}>Hover me</button>
    </div>
  </div>
);

export default Button_stiff;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_stiff = () => (
         <div>
          <div className="container"><button className="button">Hover me</button></div>
        </div>
        );

        export default Button_stiff;
        
        
         */
}
