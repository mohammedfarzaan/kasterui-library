import React from "react";
import styles from "./Button_milk.module.css";

const Button_milk = () => (
  <div>
    <button className={styles["button"]}>Enter</button>
  </div>
);

export default Button_milk;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_milk = () => (
         <div>
          <button className="button">Enter</button>
        </div>
        );

        export default Button_milk;
        
        
         */
}
