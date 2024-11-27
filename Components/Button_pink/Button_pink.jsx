import React from "react";
import styles from "./Button_pink.module.css";

const Button_pink = () => (
  <div>
    <div className={styles["box"]}>
      <div className={styles["btn"]}>
        <button href="#">HOVER ME</button>
      </div>
    </div>
  </div>
);

export default Button_pink;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_pink = () => (
         <div>
          <div className="box">
  <div className="btn">
    <button href="#">HOVER ME</button>
  </div>
</div>
        </div>
        );

        export default Button_pink;
        
        
         */
}
