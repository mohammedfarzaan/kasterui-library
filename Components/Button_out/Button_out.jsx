import React from "react";
import styles from "./Button_out.module.css";

const Button_out = () => (
  <div>
    <button className={styles["btn-slice"]} href="#">
      <div className={styles["top"]}>
        <span>Sliced Button</span>
      </div>
      <div className={styles["bottom"]}>
        <span>Sliced Button</span>
      </div>
    </button>
  </div>
);

export default Button_out;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_out = () => (
         <div>
          <button className="btn-slice" href="#">
  <div className="top"><span>Sliced Button</span></div>
  <div className="bottom"><span>Sliced Button</span></div>
</button>
        </div>
        );

        export default Button_out;
        
        
         */
}
