import React from "react";
import styles from "./Button_say.module.css";

const Button_say = () => (
  <div>
    <div className={styles["badges"]}>
      <button className={styles["blue"]}>Share Online</button>
      <button className={styles["yellow"]}>Working on it</button>
      <button className={styles["green"]}>Success</button>
      <button className={styles["red"]}>Error</button>
    </div>
  </div>
);

export default Button_say;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_say = () => (
         <div>
          <div className="badges">
    <button className="blue">Share Online</button>
    <button className="yellow">Working on it</button>
    <button className="green">Success</button>
    <button className="red">Error</button>
</div>
        </div>
        );

        export default Button_say;
        
        
         */
}
