import React from "react";
import styles from "./Button_each.module.css";

const Button_each = () => (
  <div>
    <div>
      <button className={styles["btn"]}>
        <i className={styles["animation"]}></i>BUTTON
        <i className={styles["animation"]}></i>
      </button>
    </div>
  </div>
);

export default Button_each;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_each = () => (
         <div>
          <div>
    <button className="btn"><i className="animation"></i>BUTTON<i className="animation"></i>
    </button>
</div>
        </div>
        );

        export default Button_each;
        
        
         */
}
