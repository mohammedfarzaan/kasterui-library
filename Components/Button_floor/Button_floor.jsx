import React from "react";
import styles from "./Button_floor.module.css";

const Button_floor = () => (
  <div>
    <div className={styles["button"]}>
      <div className={styles["box"]}>H</div>
      <div className={styles["box"]}>O</div>
      <div className={styles["box"]}>V</div>
      <div className={styles["box"]}>E</div>
      <div className={styles["box"]}>R</div>
    </div>
  </div>
);

export default Button_floor;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_floor = () => (
         <div>
          <div className="button">
    <div className="box">H</div>
    <div className="box">O</div>
    <div className="box">V</div>
    <div className="box">E</div>
    <div className="box">R</div>
</div>
        </div>
        );

        export default Button_floor;
        
        
         */
}
