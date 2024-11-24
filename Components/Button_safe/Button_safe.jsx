import React from "react";
import styles from "./Button_safe.module.css";

const Button_safe = () => (
  <div>
    <button className={styles["vlrt"]}>
      <span className={styles["green"]}></span>Hover effect
    </button>
  </div>
);

export default Button_safe;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_safe = () => (
         <div>
          <button className="vlrt"><span className="green"></span>Hover effect</button>
        </div>
        );

        export default Button_safe;
        
        
         */
}
