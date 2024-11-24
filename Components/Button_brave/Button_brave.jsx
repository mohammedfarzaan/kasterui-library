import React from "react";
import styles from "./Button_brave.module.css";

const Button_brave = () => (
  <div>
    <button className={styles["icon-btn"] + styles["add-btn"]}>
      <div className={styles["add-icon"]}></div>
      <div className={styles["btn-txt"]}>Add Photo</div>
    </button>
  </div>
);

export default Button_brave;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_brave = () => (
         <div>
          <button className="icon-btn add-btn">
    <div className="add-icon"></div>
    <div className="btn-txt">Add Photo</div>
</button>
        </div>
        );

        export default Button_brave;
        
        
         */
}