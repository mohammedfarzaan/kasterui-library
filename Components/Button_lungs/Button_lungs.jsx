import React from "react";
import styles from "./Button_lungs.module.css";

const Button_lungs = () => (
  <div>
    <button className={styles["button"]} role="button">
      Happy Coding!
    </button>
  </div>
);

export default Button_lungs;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_lungs = () => (
         <div>
          <button className="button" role="button">Happy Coding!</button>
        </div>
        );

        export default Button_lungs;
        
        
         */
}
