import React from "react";
import styles from "./Input_heard.module.css";

const Input_heard = () => (
  <div>
    <div className={styles["number-control"]}>
      <div className={styles["number-left"]}></div>
      <input
        type="number"
        name="number"
        className={styles["number-quantity"]}
      />
      <div className={styles["number-right"]}></div>
    </div>
  </div>
);

export default Input_heard;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_heard = () => (
         <div>
          <div className="number-control">
  <div className="number-left"></div>
  <input type="number" name="number" className="number-quantity" />
  <div className="number-right"></div>
</div>
        </div>
        );

        export default Input_heard;
        
        
         */
}
