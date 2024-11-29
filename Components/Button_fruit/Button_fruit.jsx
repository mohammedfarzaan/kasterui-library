import React from "react";
import styles from "./Button_fruit.module.css";

const Button_fruit = () => (
  <div>
    <button type="submit" className={styles["button"]}>
      <span>Hello</span>
    </button>
  </div>
);

export default Button_fruit;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_fruit = () => (
         <div>
          <button type="submit" className="button">
  <span>Hello</span>
</button>
        </div>
        );

        export default Button_fruit;
        
        
         */
}
