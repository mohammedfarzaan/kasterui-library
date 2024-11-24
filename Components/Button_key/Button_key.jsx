import React from "react";
import styles from "./Button_key.module.css";

const Button_key = () => (
  <div>
    <button className={styles["button"]}>CLICK ME</button>
  </div>
);

export default Button_key;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_key = () => (
         <div>
          <button className="button">
  CLICK ME
</button>
        </div>
        );

        export default Button_key;
        
        
         */
}
