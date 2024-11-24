import React from "react";
import styles from "./Button_wish.module.css";

const Button_wish = () => (
  <div>
    <button className={styles["cti"]}>
      <div className={styles["CTI"]}>Code to Infinity</div>
    </button>
  </div>
);

export default Button_wish;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_wish = () => (
         <div>
          <button className="cti">
  <div className="CTI">
    Code to Infinity
  </div>
</button>
        </div>
        );

        export default Button_wish;
        
        
         */
}