import React from "react";
import styles from "./Button_neck.module.css";

const Button_neck = () => (
  <div>
    <button className={styles["btn"]}>
      <span>Get started</span>
    </button>
  </div>
);

export default Button_neck;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_neck = () => (
         <div>
          <button className="btn">
  <span>Get started</span>
</button>
        </div>
        );

        export default Button_neck;
        
        
         */
}
