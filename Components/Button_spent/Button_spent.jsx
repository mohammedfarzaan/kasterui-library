import React from "react";
import styles from "./Button_spent.module.css";

const Button_spent = () => (
  <div>
    <button className={styles["button"]}>Join Today ➞</button>
  </div>
);

export default Button_spent;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_spent = () => (
         <div>
          <button className="button">Join Today ➞</button>
        </div>
        );

        export default Button_spent;
        
        
         */
}
