import React from "react";
import styles from "./Button_melted.module.css";

const Button_melted = () => (
  <div>
    <button className={styles["btn"]}>
      <span>Hover Me</span>
    </button>
  </div>
);

export default Button_melted;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_melted = () => (
         <div>
          <button className="btn"><span>Hover Me</span></button>
        </div>
        );

        export default Button_melted;
        
        
         */
}
