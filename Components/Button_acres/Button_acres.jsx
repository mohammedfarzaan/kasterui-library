import React from "react";
import styles from "./Button_acres.module.css";

const Button_acres = () => (
  <div>
    <div
      className={styles["item"] + styles["button-parrot"]}
      style="--bg-color: #2c3e50"
    >
      <button>
        Click Me!
        <div className={styles["parrot"]}></div>
        <div className={styles["parrot"]}></div>
        <div className={styles["parrot"]}></div>
        <div className={styles["parrot"]}></div>
        <div className={styles["parrot"]}></div>
        <div className={styles["parrot"]}></div>
      </button>
    </div>
  </div>
);

export default Button_acres;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_acres = () => (
         <div>
          <div className="item button-parrot" style="--bg-color: #2c3e50">
    <button>Click Me!
      <div className="parrot"></div>
      <div className="parrot"></div>
      <div className="parrot"></div>
      <div className="parrot"></div>
      <div className="parrot"></div>
      <div className="parrot"></div>
    </button>
  </div>
        </div>
        );

        export default Button_acres;
        
        
         */
}
