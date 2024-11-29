import React from "react";
import styles from "./Button_sing.module.css";

const Button_sing = () => (
  <div>
    <div className={styles["body"]}>
      <button className={styles["btn"] + styles["btn-hover"]}>
        <span className={styles["btn-text"]}>Practice now</span>
      </button>
    </div>
  </div>
);

export default Button_sing;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_sing = () => (
         <div>
          <div className="body">
<button className="btn btn-hover">
  <span className="btn-text">Practice now</span>
</button>
</div>
        </div>
        );

        export default Button_sing;
        
        
         */
}
