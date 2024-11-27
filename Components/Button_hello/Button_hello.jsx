import React from "react";
import styles from "./Button_hello.module.css";

const Button_hello = () => (
  <div>
    <button className={styles["button"]}>3D Button</button>
  </div>
);

export default Button_hello;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_hello = () => (
         <div>
          <button className="button">3D Button</button>
        </div>
        );

        export default Button_hello;
        
        
         */
}
