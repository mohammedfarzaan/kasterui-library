import React from "react";
import styles from "./Button_came.module.css";

const Button_came = () => (
  <div>
    <button className={styles["morph-button"]}></button>
  </div>
);

export default Button_came;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_came = () => (
         <div>
          <button className="morph-button"></button>
        </div>
        );

        export default Button_came;
        
        
         */
}
