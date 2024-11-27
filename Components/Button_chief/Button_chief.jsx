import React from "react";
import styles from "./Button_chief.module.css";

const Button_chief = () => (
  <div>
    <button>
      <span className={styles["button-text"]}></span>
      <span className={styles["animation"]}>
        <span className={styles["paper-wrapper"]}>
          <span className={styles["paper"]}></span>
        </span>
        <span className={styles["shredded-wrapper"]}>
          <span className={styles["shredded"]}></span>
        </span>
        <span className={styles["lid"]}></span>
        <span className={styles["can"]}>
          <span className={styles["filler"]}></span>
        </span>
      </span>
    </button>
  </div>
);

export default Button_chief;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_chief = () => (
         <div>
          <button>
  <span className="button-text">
  </span>
  <span className="animation">
    <span className="paper-wrapper">
      <span className="paper">
      </span>
    </span>
    <span className="shredded-wrapper">
      <span className="shredded">
      </span>
    </span>
    <span className="lid">
    </span>
    <span className="can">
      <span className="filler">
      </span>
    </span>
  </span>
</button>
        </div>
        );

        export default Button_chief;
        
        
         */
}
