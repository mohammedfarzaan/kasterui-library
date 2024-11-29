import React from "react";
import styles from "./Button_sold.module.css";

const Button_sold = () => (
  <div>
    <button className={styles["btn"]}>
      <span className={styles["btn__visible"]}>Buy Now</span>
      <span className={styles["btn__invisible"]}>Only 2 Left</span>
    </button>
  </div>
);

export default Button_sold;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_sold = () => (
         <div>
          <button className="btn">
    <span className="btn__visible">Buy Now</span>
    <span className="btn__invisible">Only 2 Left</span>
</button>
        </div>
        );

        export default Button_sold;
        
        
         */
}
