import React from "react";
import styles from "./Button_life.module.css";

const Button_life = () => (
  <div>
    <button className={styles["btn"]}>
      Hover me !<div className={styles["background"]}></div>
    </button>
  </div>
);

export default Button_life;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_life = () => (
         <div>
          <button className="btn">Hover me !
    <div className="background"></div>
</button>
        </div>
        );

        export default Button_life;
        
        
         */
}
