import React from "react";
import styles from "./Button_nice.module.css";

const Button_nice = () => (
  <div>
    <button className={styles["button"]}>
      <span>Hover</span>
    </button>
  </div>
);

export default Button_nice;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_nice = () => (
         <div>
          <button className="button">
  <span>Hover</span>
</button>
        </div>
        );

        export default Button_nice;
        
        
         */
}
