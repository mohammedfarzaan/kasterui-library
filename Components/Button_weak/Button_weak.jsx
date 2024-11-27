import React from "react";
import styles from "./Button_weak.module.css";

const Button_weak = () => (
  <div>
    <button className={styles["button"]} style="vertical-align:middle">
      <span>Download</span>
    </button>
  </div>
);

export default Button_weak;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_weak = () => (
         <div>
          <button className="button" style="vertical-align:middle"><span>Download</span></button>
        </div>
        );

        export default Button_weak;
        
        
         */
}
