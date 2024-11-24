import React from "react";
import styles from "./Button_her.module.css";

const Button_her = () => (
  <div>
    <button className={styles["box"]}>Button</button>
  </div>
);

export default Button_her;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_her = () => (
         <div>
          <button className="box">
  Button
</button>
        </div>
        );

        export default Button_her;
        
        
         */
}
