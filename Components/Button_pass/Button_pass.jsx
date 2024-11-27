import React from "react";
import styles from "./Button_pass.module.css";

const Button_pass = () => (
  <div>
    <div className={styles["badges"]}>
      <button className={styles["blue"]}>Share Online</button>
      <button className={styles["yellow"]}>Working on it</button>
      <button className={styles["green"]}>Success</button>
      <button className={styles["red"]}>Error</button>
    </div>
  </div>
);

export default Button_pass;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_pass = () => (
         <div>
          <div className="badges">
    <button className="blue">Share Online</button>
    <button className="yellow">Working on it</button>
    <button className="green">Success</button>
    <button className="red">Error</button>
</div>
        </div>
        );

        export default Button_pass;
        
        
         */
}
