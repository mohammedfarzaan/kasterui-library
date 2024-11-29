import React from "react";
import styles from "./Card_basic.module.css";

const Card_basic = () => (
  <div>
    <div className={styles["card"]}>
      <span></span>
      <div className={styles["content"]}>Hold Me : )</div>
    </div>
  </div>
);

export default Card_basic;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_basic = () => (
         <div>
          <div className="card">
   <span></span>
   <div className="content">Hold Me : )</div>
   </div>
        </div>
        );

        export default Card_basic;
        
        
         */
}
