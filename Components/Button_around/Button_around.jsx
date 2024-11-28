import React from "react";
import styles from "./Button_around.module.css";

const Button_around = () => (
  <div>
    <button type="submit" className={styles["button"]}>
      <span>Hello</span>
    </button>
  </div>
);

export default Button_around;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_around = () => (
         <div>
          <button type="submit" className="button">
  <span>Hello</span>
</button>
        </div>
        );

        export default Button_around;
        
        
         */
}
