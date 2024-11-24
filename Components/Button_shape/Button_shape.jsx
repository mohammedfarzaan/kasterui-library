import React from "react";
import styles from "./Button_shape.module.css";

const Button_shape = () => (
  <div>
    <a href="#" className={styles["menu__link"]}>
      Hover me!
    </a>
  </div>
);

export default Button_shape;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_shape = () => (
         <div>
          <a href="#" className="menu__link">
  Hover me!
</a>
        </div>
        );

        export default Button_shape;
        
        
         */
}
