import React from "react";
import styles from "./Button_poetry.module.css";

const Button_poetry = () => (
  <div>
    <button className={styles["button"]}>Get in touch</button>
  </div>
);

export default Button_poetry;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_poetry = () => (
         <div>
          <button className="button">Get in touch</button>
        </div>
        );

        export default Button_poetry;
        
        
         */
}
