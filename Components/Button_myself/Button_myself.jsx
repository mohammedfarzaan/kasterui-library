import React from "react";
import styles from "./Button_myself.module.css";

const Button_myself = () => (
  <div>
    <button className={styles["mouse"]}>
      <div className={styles["scroll"]}></div>
    </button>
  </div>
);

export default Button_myself;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_myself = () => (
         <div>
          <button className="mouse">
  <div className="scroll"></div>

</button>
        </div>
        );

        export default Button_myself;
        
        
         */
}
