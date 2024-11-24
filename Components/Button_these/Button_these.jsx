import React from "react";
import styles from "./Button_these.module.css";

const Button_these = () => (
  <div>
    <button className={styles["button1"]}>Click me!</button>
  </div>
);

export default Button_these;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_these = () => (
         <div>
          <button className="button1">
 Click me!
</button>
        </div>
        );

        export default Button_these;
        
        
         */
}
