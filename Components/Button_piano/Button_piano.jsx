import React from "react";
import styles from "./Button_piano.module.css";

const Button_piano = () => (
  <div>
    <button className={styles["button"]}>glitch</button>
  </div>
);

export default Button_piano;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_piano = () => (
         <div>
          <button className="button">
  glitch
</button>
        </div>
        );

        export default Button_piano;
        
        
         */
}
