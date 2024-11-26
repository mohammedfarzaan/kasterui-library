import React from "react";
import styles from "./Button_size.module.css";

const Button_size = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["base"]}></span>
      <span className={styles["red"]}></span>
    </button>
  </div>
);

export default Button_size;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_size = () => (
         <div>
          <button className="button">
  <span className="base"></span>
  <span className="red"></span>
</button>
        </div>
        );

        export default Button_size;
        
        
         */
}
