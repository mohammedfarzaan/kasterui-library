import React from "react";
import styles from "./Button_took.module.css";

const Button_took = () => (
  <div>
    <button className={styles["button"]} role="button">
      Happy Coding!
    </button>
  </div>
);

export default Button_took;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_took = () => (
         <div>
          <button className="button" role="button">Happy Coding!</button>
        </div>
        );

        export default Button_took;
        
        
         */
}
