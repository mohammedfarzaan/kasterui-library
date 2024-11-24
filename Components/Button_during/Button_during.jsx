import React from "react";
import styles from "./Button_during.module.css";

const Button_during = () => (
  <div>
    <button className={styles["button"]}>NEON</button>
  </div>
);

export default Button_during;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_during = () => (
         <div>
          <button className="button">
  NEON
</button>
        </div>
        );

        export default Button_during;
        
        
         */
}
