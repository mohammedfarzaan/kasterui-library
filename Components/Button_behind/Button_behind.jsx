import React from "react";
import styles from "./Button_behind.module.css";

const Button_behind = () => (
  <div>
    <button className={styles["button"] + styles["type1"]}></button>
  </div>
);

export default Button_behind;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_behind = () => (
         <div>
          <button className="button type1">
</button>
        </div>
        );

        export default Button_behind;
        
        
         */
}
