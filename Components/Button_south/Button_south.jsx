import React from "react";
import styles from "./Button_south.module.css";

const Button_south = () => (
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

export default Button_south;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_south = () => (
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

        export default Button_south;
        
        
         */
}
