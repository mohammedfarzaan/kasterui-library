import React from "react";
import styles from "./Button_little.module.css";

const Button_little = () => (
  <div>
    <button className={styles["custom-btn"] + styles["btn-4"]}>
      <span>Read More</span>
    </button>
  </div>
);

export default Button_little;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_little = () => (
         <div>
          <button className="custom-btn btn-4"><span>Read More</span></button>
        </div>
        );

        export default Button_little;
        
        
         */
}
