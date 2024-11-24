import React from "react";
import styles from "./Button_rough.module.css";

const Button_rough = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["liquid"]}></span>
      <span className={styles["btn-txt"]}>Click Me</span>
    </button>
  </div>
);

export default Button_rough;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_rough = () => (
         <div>
          <button className="button">
  <span className="liquid"></span>  
  <span className="btn-txt">Click Me</span>
</button>
        </div>
        );

        export default Button_rough;
        
        
         */
}
