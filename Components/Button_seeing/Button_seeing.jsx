import React from "react";
import styles from "./Button_seeing.module.css";

const Button_seeing = () => (
  <div>
    <button className={styles["btn-56"]}>Button</button>
  </div>
);

export default Button_seeing;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_seeing = () => (
         <div>
          <button className="btn-56">Button</button>
        </div>
        );

        export default Button_seeing;
        
        
         */
}
