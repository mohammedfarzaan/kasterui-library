import React from "react";
import styles from "./Button_spider.module.css";

const Button_spider = () => (
  <div>
    <button className={styles["button"]}>I'm a Button</button>
  </div>
);

export default Button_spider;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_spider = () => (
         <div>
          <button className="button">
      I'm a Button
    </button>
        </div>
        );

        export default Button_spider;
        
        
         */
}
