import React from "react";
import styles from "./Button_topic.module.css";

const Button_topic = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["bracket"] + styles["left"]}>❴</span>
      <span className={styles["text"]}>Code</span>
      <span className={styles["bracket"] + styles["right"]}>❵</span>
    </button>
  </div>
);

export default Button_topic;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_topic = () => (
         <div>
          <button className="button">
  <span className="bracket left">❴</span>
  <span className="text">Code</span>
  <span className="bracket right">❵</span>
</button>
        </div>
        );

        export default Button_topic;
        
        
         */
}
