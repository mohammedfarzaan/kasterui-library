import React from "react";
import styles from "./Button_silent.module.css";

const Button_silent = () => (
  <div>
    <button>
      <span className={styles["txt"]}>click me</span>
      <span className={styles["txt2"]}>You did it</span>
      <span className={styles["gradient"]}></span>
    </button>
  </div>
);

export default Button_silent;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_silent = () => (
         <div>
          <button>
  <span className="txt">click me</span>
  <span className="txt2">You did it</span>
  <span className="gradient"></span>
</button>
        </div>
        );

        export default Button_silent;
        
        
         */
}
