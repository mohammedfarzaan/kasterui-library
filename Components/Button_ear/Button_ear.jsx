import React from "react";
import styles from "./Button_ear.module.css";

const Button_ear = () => (
  <div>
    <button className={styles["button"]}>Click me</button>
  </div>
);

export default Button_ear;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_ear = () => (
         <div>
          <button className="button">
  Click me
</button>
        </div>
        );

        export default Button_ear;
        
        
         */
}