import React from "react";
import styles from "./Button_caught.module.css";

const Button_caught = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["left"]}></span>
      <span>Hover Me</span>
      <span className={styles["right"]}></span>
    </button>
  </div>
);

export default Button_caught;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_caught = () => (
         <div>
          <button className="button">
  <span className="left"></span>
  <span>Hover Me</span>
  <span className="right"></span>
</button>
        </div>
        );

        export default Button_caught;
        
        
         */
}
