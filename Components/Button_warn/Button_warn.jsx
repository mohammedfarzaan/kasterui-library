import React from "react";
import styles from "./Button_warn.module.css";

const Button_warn = () => (
  <div>
    <button className={styles["button"]}>Fondle ME!</button>
  </div>
);

export default Button_warn;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_warn = () => (
         <div>
          <button className="button">
    Fondle ME!
</button>
        </div>
        );

        export default Button_warn;
        
        
         */
}