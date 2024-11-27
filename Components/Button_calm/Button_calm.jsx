import React from "react";
import styles from "./Button_calm.module.css";

const Button_calm = () => (
  <div>
    <button className={styles["button"]}>Duolingo Button</button>
  </div>
);

export default Button_calm;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_calm = () => (
         <div>
          <button className="button">
  Duolingo Button
</button>
        </div>
        );

        export default Button_calm;
        
        
         */
}
