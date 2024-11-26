import React from "react";
import styles from "./Button_place.module.css";

const Button_place = () => (
  <div>
    <button className={styles["icon-btn"] + styles["add-btn"]}>
      <div className={styles["add-icon"]}></div>
      <div className={styles["btn-txt"]}>Add Photo</div>
    </button>
  </div>
);

export default Button_place;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_place = () => (
         <div>
          <button className="icon-btn add-btn">
    <div className="add-icon"></div>
    <div className="btn-txt">Add Photo</div>
</button>
        </div>
        );

        export default Button_place;
        
        
         */
}
