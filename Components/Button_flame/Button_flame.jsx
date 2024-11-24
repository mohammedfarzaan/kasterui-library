import React from "react";
import styles from "./Button_flame.module.css";

const Button_flame = () => (
  <div>
    <button className={styles["custom-btn"] + styles["btn-1"]}>Hello!</button>
  </div>
);

export default Button_flame;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_flame = () => (
         <div>
          <button className="custom-btn btn-1">Hello!</button>
        </div>
        );

        export default Button_flame;
        
        
         */
}
