import React from "react";
import styles from "./Button_coffee.module.css";

const Button_coffee = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["light-border"]}>Colorful Shiny</div>
    </button>
  </div>
);

export default Button_coffee;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_coffee = () => (
         <div>
          <button className="button">
  <div className="light-border">Colorful Shiny</div>
</button>
        </div>
        );

        export default Button_coffee;
        
        
         */
}
