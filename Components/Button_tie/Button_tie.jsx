import React from "react";
import styles from "./Button_tie.module.css";

const Button_tie = () => (
  <div>
    <button className={styles["btn-slice"]} href="#">
      <div className={styles["top"]}>
        <span>Sliced Button</span>
      </div>
      <div className={styles["bottom"]}>
        <span>Sliced Button</span>
      </div>
    </button>
  </div>
);

export default Button_tie;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_tie = () => (
         <div>
          <button className="btn-slice" href="#">
  <div className="top"><span>Sliced Button</span></div>
  <div className="bottom"><span>Sliced Button</span></div>
</button>
        </div>
        );

        export default Button_tie;
        
        
         */
}
