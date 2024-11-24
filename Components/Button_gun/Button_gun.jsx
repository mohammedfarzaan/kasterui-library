import React from "react";
import styles from "./Button_gun.module.css";

const Button_gun = () => (
  <div>
    <div className={styles["button"]}>
      Button<span className={styles["button-border"]}></span>
    </div>
  </div>
);

export default Button_gun;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_gun = () => (
         <div>
          <div className="button">
  Button<span className="button-border"></span>
</div>
        </div>
        );

        export default Button_gun;
        
        
         */
}