import React from "react";
import styles from "./Button_oxygen.module.css";

const Button_oxygen = () => (
  <div>
    <button className={styles["btn-9"]}>
      <span>Button</span>
    </button>
  </div>
);

export default Button_oxygen;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_oxygen = () => (
         <div>
          <button className="btn-9"><span>Button</span></button>
        </div>
        );

        export default Button_oxygen;
        
        
         */
}
