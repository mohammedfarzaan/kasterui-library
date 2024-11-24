import React from "react";
import styles from "./Button_paint.module.css";

const Button_paint = () => (
  <div>
    <button className={styles["button"]}>HOVER ME 🙈</button>
  </div>
);

export default Button_paint;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_paint = () => (
         <div>
          <button className="button">
  HOVER ME 🙈
</button>
        </div>
        );

        export default Button_paint;
        
        
         */
}
