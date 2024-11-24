import React from "react";
import styles from "./Button_mouse.module.css";

const Button_mouse = () => (
  <div>
    <button className={styles["btn"]}>
      <span className={styles["btn__visible"]}>Buy Now</span>
      <span className={styles["btn__invisible"]}>Only 2 Left</span>
    </button>
  </div>
);

export default Button_mouse;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_mouse = () => (
         <div>
          <button className="btn">
    <span className="btn__visible">Buy Now</span>
    <span className="btn__invisible">Only 2 Left</span>
</button>
        </div>
        );

        export default Button_mouse;
        
        
         */
}
