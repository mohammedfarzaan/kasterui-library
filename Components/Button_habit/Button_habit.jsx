import React from "react";
import styles from "./Button_habit.module.css";

const Button_habit = () => (
  <div>
    <button className={styles["like-button"]}></button>
  </div>
);

export default Button_habit;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_habit = () => (
         <div>
          <button className="like-button"></button>
        </div>
        );

        export default Button_habit;
        
        
         */
}
