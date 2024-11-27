import React from "react";
import styles from "./Button_pine.module.css";

const Button_pine = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["btn"]}>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
);

export default Button_pine;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_pine = () => (
         <div>
          <div className="container">
    <div className="btn"><a href="#">Read More</a></div>
 </div>
        </div>
        );

        export default Button_pine;
        
        
         */
}
