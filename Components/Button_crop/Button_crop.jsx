import React from "react";
import styles from "./Button_crop.module.css";

const Button_crop = () => (
  <div>
    <button className={styles["btn_center"]}>Click Me</button>
  </div>
);

export default Button_crop;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_crop = () => (
         <div>
          <button className="btn_center">
    Click Me
</button>
        </div>
        );

        export default Button_crop;
        
        
         */
}
