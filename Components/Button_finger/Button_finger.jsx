import React from "react";
import styles from "./Button_finger.module.css";

const Button_finger = () => (
  <div>
    <button className={styles["Btn"]}>
      <div className={styles["sign"]}>+</div>

      <div className={styles["text"]}>Create</div>
    </button>
  </div>
);

export default Button_finger;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_finger = () => (
         <div>
          <button className="Btn">
  
  <div className="sign">+</div>
  
  <div className="text">Create</div>
</button>
        </div>
        );

        export default Button_finger;
        
        
         */
}
