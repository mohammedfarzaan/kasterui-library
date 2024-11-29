import React from "react";
import styles from "./Card_blow.module.css";

const Card_blow = () => (
  <div>
    <div className={styles["box"]}>
      <span></span>
      <div className={styles["content"]}>
        <h2>Hover me!</h2>
      </div>
    </div>
  </div>
);

export default Card_blow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_blow = () => (
         <div>
          <div className="box">
  <span></span>
  <div className="content">
    <h2>Hover me!</h2>
  </div>
</div>
        </div>
        );

        export default Card_blow;
        
        
         */
}
