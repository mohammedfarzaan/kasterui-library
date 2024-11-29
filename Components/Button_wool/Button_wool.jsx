import React from "react";
import styles from "./Button_wool.module.css";

const Button_wool = () => (
  <div>
    <div className={styles["del"]}>
      <div>Delete</div>
    </div>
  </div>
);

export default Button_wool;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_wool = () => (
         <div>
          <div className="del">
    <div>
      Delete
    </div>     
</div>
        </div>
        );

        export default Button_wool;
        
        
         */
}
