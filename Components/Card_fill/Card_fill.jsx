import React from "react";
import styles from "./Card_fill.module.css";

const Card_fill = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card_load"]}></div>
      <div className={styles["card_load_extreme_title"]}></div>
      <div className={styles["card_load_extreme_descripion"]}></div>
    </div>
  </div>
);

export default Card_fill;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_fill = () => (
         <div>
          <div className="card">
    <div className="card_load"></div>
    <div className="card_load_extreme_title"></div>
    <div className="card_load_extreme_descripion"></div>
</div>
        </div>
        );

        export default Card_fill;
        
        
         */
}
