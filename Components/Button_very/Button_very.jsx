import React from "react";
import styles from "./Button_very.module.css";

const Button_very = () => (
  <div>
    <button className={styles["btn"]}>
      <span>鬼滅の刃</span>
    </button>
  </div>
);

export default Button_very;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_very = () => (
         <div>
          <button className="btn"><span>鬼滅の刃</span></button>
        </div>
        );

        export default Button_very;
        
        
         */
}
