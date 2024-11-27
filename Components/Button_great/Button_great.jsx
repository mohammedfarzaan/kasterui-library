import React from "react";
import styles from "./Button_great.module.css";

const Button_great = () => (
  <div>
    <button className={styles["custom-button"]}>
      <span>Click Here </span>
    </button>
  </div>
);

export default Button_great;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_great = () => (
         <div>
          <button className="custom-button"><span>Click Here </span></button>
        </div>
        );

        export default Button_great;
        
        
         */
}
