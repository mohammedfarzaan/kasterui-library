import React from "react";
import styles from "./Button_hit.module.css";

const Button_hit = () => (
  <div>
    <button className={styles["Btn"]}>
      <p className={styles["text"]}>Button</p>
      <span className={styles["BG"]}></span>
    </button>
  </div>
);

export default Button_hit;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_hit = () => (
         <div>
          <button className="Btn">
  <p className="text">Button</p>
  <span className="BG"></span>
</button>
        </div>
        );

        export default Button_hit;
        
        
         */
}
