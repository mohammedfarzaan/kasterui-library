import React from "react";
import styles from "./Button_factor.module.css";

const Button_factor = () => (
  <div>
    <a href="#" className={styles["menu__link"]}>
      Hover me!
    </a>
  </div>
);

export default Button_factor;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_factor = () => (
         <div>
          <a href="#" className="menu__link">Hover me!</a>
        </div>
        );

        export default Button_factor;
        
        
         */
}
