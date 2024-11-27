import React from "react";
import styles from "./Button_sit.module.css";

const Button_sit = () => (
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

export default Button_sit;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_sit = () => (
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

        export default Button_sit;
        
        
         */
}
