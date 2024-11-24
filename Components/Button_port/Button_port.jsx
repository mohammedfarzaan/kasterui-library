import React from "react";
import styles from "./Button_port.module.css";

const Button_port = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["button-text"]}>Hover me</span>
      <div className={styles["fill-container"]}></div>
    </button>
  </div>
);

export default Button_port;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_port = () => (
         <div>
          <button className="button">
  <span className="button-text">Hover me</span>
  <div className="fill-container"></div>
</button>
        </div>
        );

        export default Button_port;
        
        
         */
}
