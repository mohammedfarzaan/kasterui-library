import React from "react";
import styles from "./Button_sugar.module.css";

const Button_sugar = () => (
  <div>
    <button>
      <span className={styles["txt"]}>click me</span>
      <span className={styles["txt2"]}>You did it</span>
      <span className={styles["gradient"]}></span>
    </button>
  </div>
);

export default Button_sugar;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_sugar = () => (
         <div>
          <button>
  <span className="txt">click me</span>
  <span className="txt2">You did it</span>
  <span className="gradient"></span>
</button>
        </div>
        );

        export default Button_sugar;
        
        
         */
}
