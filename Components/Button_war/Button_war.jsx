import React from "react";
import styles from "./Button_war.module.css";

const Button_war = () => (
  <div>
    <button className={styles["btn-hover"]}>HOVER ME</button>
  </div>
);

export default Button_war;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_war = () => (
         <div>
          <button className="btn-hover">HOVER ME</button>
        </div>
        );

        export default Button_war;
        
        
         */
}
