import React from "react";
import styles from "./Button_slip.module.css";

const Button_slip = () => (
  <div>
    <button className={styles["button2"]}>Hover me</button>
  </div>
);

export default Button_slip;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_slip = () => (
         <div>
          <button className="button2">
    Hover me
</button>
        </div>
        );

        export default Button_slip;
        
        
         */
}