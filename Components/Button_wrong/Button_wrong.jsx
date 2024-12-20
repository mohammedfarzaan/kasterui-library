import React from "react";
import styles from "./Button_wrong.module.css";

const Button_wrong = () => (
  <div>
    <button>
      <div className={styles["progress"]}>
        <div className={styles["progress-bar"]}> </div>
      </div>

      <p className={styles["before-scan"]}>Find aliens</p>
      <p className={styles["scaning"]}>Scanning</p>
      <p className={styles["complete"]}>No aliens found</p>
    </button>
  </div>
);

export default Button_wrong;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_wrong = () => (
         <div>
          <button>
  <div className="progress">
     <div className="progress-bar"> </div>
  </div>
  
  <p className="before-scan">Find aliens</p>
  <p className="scaning">Scanning</p>
  <p className="complete">No aliens found</p>
</button>
        </div>
        );

        export default Button_wrong;
        
        
         */
}
