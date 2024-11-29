import React from "react";
import styles from "./Button_bowl.module.css";

const Button_bowl = () => (
  <div>
    <button className={styles["button"]}>
      <span>Submit</span>
    </button>
  </div>
);

export default Button_bowl;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_bowl = () => (
         <div>
          <button className="button">
  <span>Submit</span>
</button>
        </div>
        );

        export default Button_bowl;
        
        
         */
}
