import React from "react";
import styles from "./Button_flag.module.css";

const Button_flag = () => (
  <div>
    <button className={styles["container"]}>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <div className={styles["card"]}>
        <div className={styles["card-header"]}>HOVER</div>
      </div>
    </button>
  </div>
);

export default Button_flag;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_flag = () => (
         <div>
          <button className="container">
  <a href="#"></a>
  <a href="#"></a>
  <a href="#"></a>
  <a href="#"></a>
  <div className="card">
    <div className="card-header">
      HOVER
    </div>
  </div>
</button>
        </div>
        );

        export default Button_flag;
        
        
         */
}
