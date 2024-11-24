import React from "react";
import styles from "./Button_single.module.css";

const Button_single = () => (
  <div>
    <button className={styles["button"]}>
      <p className={styles["btn-txt"]}>Hello !</p>
    </button>
  </div>
);

export default Button_single;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_single = () => (
         <div>
          <button className="button">
  <p className="btn-txt">Hello !</p>
</button>
        </div>
        );

        export default Button_single;
        
        
         */
}
