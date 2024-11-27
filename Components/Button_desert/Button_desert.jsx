import React from "react";
import styles from "./Button_desert.module.css";

const Button_desert = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["circle"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["button-inner"]}>Button</div>
    </button>
  </div>
);

export default Button_desert;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_desert = () => (
         <div>
          <button className="button">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="button-inner">Button</div>
</button>
        </div>
        );

        export default Button_desert;
        
        
         */
}
