import React from "react";
import styles from "./Button_after.module.css";

const Button_after = () => (
  <div>
    <button className={styles["button"]}>
      <span>Button</span>
    </button>
  </div>
);

export default Button_after;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_after = () => (
         <div>
          <button className="button">
  <span>Button</span>
</button>
        </div>
        );

        export default Button_after;
        
        
         */
}
