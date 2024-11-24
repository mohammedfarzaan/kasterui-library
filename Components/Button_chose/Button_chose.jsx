import React from "react";
import styles from "./Button_chose.module.css";

const Button_chose = () => (
  <div>
    <button className={styles["neu-button"]}>Press me</button>
  </div>
);

export default Button_chose;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_chose = () => (
         <div>
          <button className="neu-button">Press me</button>
        </div>
        );

        export default Button_chose;
        
        
         */
}
