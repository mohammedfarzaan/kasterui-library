import React from "react";
import styles from "./Button_leader.module.css";

const Button_leader = () => (
  <div>
    <button className={styles["neo-pop-tilted-button"]}>
      <span>Play Now</span>
    </button>
  </div>
);

export default Button_leader;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_leader = () => (
         <div>
          <button className="neo-pop-tilted-button">
  <span>Play Now</span>
</button>
        </div>
        );

        export default Button_leader;
        
        
         */
}
