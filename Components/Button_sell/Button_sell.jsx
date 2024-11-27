import React from "react";
import styles from "./Button_sell.module.css";

const Button_sell = () => (
  <div>
    <button className={styles["button"]}>
      Join Today
      <p>→</p>
    </button>
  </div>
);

export default Button_sell;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_sell = () => (
         <div>
          <button className="button">
  Join Today
  <p>→</p>
</button>
        </div>
        );

        export default Button_sell;
        
        
         */
}
