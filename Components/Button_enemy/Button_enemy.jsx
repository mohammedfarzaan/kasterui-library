import React from "react";
import styles from "./Button_enemy.module.css";

const Button_enemy = () => (
  <div>
    <div className={styles["button-cont"]}>
      <button className={styles["button"]}>Light Button</button>
    </div>
  </div>
);

export default Button_enemy;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_enemy = () => (
         <div>
          <div className="button-cont">
  <button className="button">Light Button</button>
</div>
        </div>
        );

        export default Button_enemy;
        
        
         */
}
