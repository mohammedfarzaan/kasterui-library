import React from "react";
import styles from "./Button_basic.module.css";

const Button_basic = () => (
  <div>
    <button className={styles["menu__icon"]}></button>
  </div>
);

export default Button_basic;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_basic = () => (
         <div>
          <button className="menu__icon">
</button>
        </div>
        );

        export default Button_basic;
        
        
         */
}
