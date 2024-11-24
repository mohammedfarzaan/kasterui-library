import React from "react";
import styles from "./Button_cake.module.css";

const Button_cake = () => (
  <div>
    <button>
      <span className={styles["txt"]}>submit</span>
      <span className={styles["txt2"]}>sent!</span>
      <span className={styles["loader-container"]}>
        <span className={styles["loader"]}></span>
      </span>
    </button>
  </div>
);

export default Button_cake;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_cake = () => (
         <div>
          <button>
  <span className="txt">submit</span>
  <span className="txt2">sent!</span>
  <span className="loader-container">
    <span className="loader"></span>
  </span>
</button>
        </div>
        );

        export default Button_cake;
        
        
         */
}
