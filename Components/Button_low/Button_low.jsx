import React from "react";
import styles from "./Button_low.module.css";

const Button_low = () => (
  <div>
    <div className={styles["button"]}>
      <a href="#" className={styles["anchor"]}>
        <span>Download CV</span>
      </a>
    </div>
  </div>
);

export default Button_low;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_low = () => (
         <div>
          <div className="button">
  <a href="#" className="anchor">
    <span>Download CV</span>
  </a>
</div>
        </div>
        );

        export default Button_low;
        
        
         */
}
