import React from "react";
import styles from "./Button_cowboy.module.css";

const Button_cowboy = () => (
  <div>
    <button className={styles["pushable"]}>
      <span className={styles["shadow"]}></span>
      <span className={styles["edge"]}></span>
      <span className={styles["front"]}>Push Me</span>
    </button>
  </div>
);

export default Button_cowboy;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_cowboy = () => (
         <div>
          <button className="pushable">
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">
        Push Me
      </span>
    </button>
        </div>
        );

        export default Button_cowboy;
        
        
         */
}
