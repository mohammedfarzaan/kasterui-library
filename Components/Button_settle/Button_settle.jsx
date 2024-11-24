import React from "react";
import styles from "./Button_settle.module.css";

const Button_settle = () => (
  <div>
    <button className={styles["btn"]}>
      <div className={styles["scroll"]}> </div>
    </button>
  </div>
);

export default Button_settle;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_settle = () => (
         <div>
          <button className="btn">
    <div className="scroll"> </div>
</button>
        </div>
        );

        export default Button_settle;
        
        
         */
}