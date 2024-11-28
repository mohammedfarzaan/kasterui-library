import React from "react";
import styles from "./Button_tried.module.css";

const Button_tried = () => (
  <div>
    <a className={styles["fancy"]} href="#">
      <span className={styles["top-key"]}></span>
      <span className={styles["text"]}>Buy Tickets</span>
      <span className={styles["bottom-key-1"]}></span>
      <span className={styles["bottom-key-2"]}></span>
    </a>
  </div>
);

export default Button_tried;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_tried = () => (
         <div>
          <a className="fancy" href="#">
  <span className="top-key"></span>
  <span className="text">Buy Tickets</span>
  <span className="bottom-key-1"></span>
  <span className="bottom-key-2"></span>
</a>
        </div>
        );

        export default Button_tried;
        
        
         */
}
