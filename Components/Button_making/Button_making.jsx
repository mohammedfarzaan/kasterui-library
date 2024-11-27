import React from "react";
import styles from "./Button_making.module.css";

const Button_making = () => (
  <div>
    <button className={styles["animated-button"]}>
      <span>Hover me</span>
      <span></span>
    </button>
  </div>
);

export default Button_making;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_making = () => (
         <div>
          <button className="animated-button">
  <span>Hover me</span>
  <span></span>
</button>
        </div>
        );

        export default Button_making;
        
        
         */
}
