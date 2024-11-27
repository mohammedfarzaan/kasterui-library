import React from "react";
import styles from "./Button_said.module.css";

const Button_said = () => (
  <div>
    <div className={styles["galaxy-button"]}>
      <button className={styles["space-button"]}>
        <span className={styles["backdrop"]}></span>
        <span className={styles["galaxy"]}></span>
        <label className={styles["text"]}>Space</label>
      </button>
      <div className={styles["bodydrop"]}></div>
    </div>
  </div>
);

export default Button_said;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_said = () => (
         <div>
          <div className="galaxy-button">
  <button className="space-button">
    <span className="backdrop"></span>
    <span className="galaxy"></span>
    <label className="text">Space</label>
  </button>
  <div className="bodydrop"></div>
</div>
        </div>
        );

        export default Button_said;
        
        
         */
}
