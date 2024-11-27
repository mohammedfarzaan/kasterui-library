import React from "react";
import styles from "./Button_salt.module.css";

const Button_salt = () => (
  <div>
    <button className={styles["button"]}>Button</button>
  </div>
);

export default Button_salt;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_salt = () => (
         <div>
          <button className="button">
  Button
</button>
        </div>
        );

        export default Button_salt;
        
        
         */
}
