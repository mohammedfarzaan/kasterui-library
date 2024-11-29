import React from "react";
import styles from "./Button_human.module.css";

const Button_human = () => (
  <div>
    <button className={styles["btn"]}> Button</button>
  </div>
);

export default Button_human;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_human = () => (
         <div>
          <button className="btn"> Button
</button>
        </div>
        );

        export default Button_human;
        
        
         */
}
