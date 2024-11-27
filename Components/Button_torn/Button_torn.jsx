import React from "react";
import styles from "./Button_torn.module.css";

const Button_torn = () => (
  <div>
    <button className={styles["btn-class-name"]}>
      <span className={styles["back"]}></span>
      <span className={styles["front"]}></span>
    </button>
  </div>
);

export default Button_torn;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_torn = () => (
         <div>
          <button className="btn-class-name">
  <span className="back"></span>
  <span className="front"></span>
</button>
        </div>
        );

        export default Button_torn;
        
        
         */
}
