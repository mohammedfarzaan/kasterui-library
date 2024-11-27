import React from "react";
import styles from "./Button_bell.module.css";

const Button_bell = () => (
  <div>
    <button className={styles["menu__icon"]}>
      <span></span>
      <span></span>
    </button>
  </div>
);

export default Button_bell;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_bell = () => (
         <div>
          <button className="menu__icon">
  <span></span>
  <span></span>
</button>
        </div>
        );

        export default Button_bell;
        
        
         */
}
