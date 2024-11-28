import React from "react";
import styles from "./Button_joy.module.css";

const Button_joy = () => (
  <div>
    <button className={styles["download"]}>
      Download
      <span className={styles["tooltip"]}>10Mo</span>
    </button>
  </div>
);

export default Button_joy;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_joy = () => (
         <div>
          <button className="download">
  Download
  <span className="tooltip">10Mo</span>
</button>
        </div>
        );

        export default Button_joy;
        
        
         */
}
