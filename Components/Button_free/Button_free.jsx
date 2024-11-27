import React from "react";
import styles from "./Button_free.module.css";

const Button_free = () => (
  <div>
    <button className={styles["button"]}>
      hover me
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
);

export default Button_free;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_free = () => (
         <div>
          <button className="button">
  hover me
  <span></span><span></span><span></span><span></span>
</button>
        </div>
        );

        export default Button_free;
        
        
         */
}
