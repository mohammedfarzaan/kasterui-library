import React from "react";
import styles from "./Button_bread.module.css";

const Button_bread = () => (
  <div>
    <button type="button" className={styles["glow-on-hover"]}>
      HOVER AND CLICK ME!
    </button>
  </div>
);

export default Button_bread;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_bread = () => (
         <div>
          <button type="button" className="glow-on-hover">
  HOVER AND CLICK ME!
</button>
        </div>
        );

        export default Button_bread;
        
        
         */
}