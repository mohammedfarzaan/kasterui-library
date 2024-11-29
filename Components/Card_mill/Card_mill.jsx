import React from "react";
import styles from "./Card_mill.module.css";

const Card_mill = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["box"]}>
        <div className={styles["content"]}></div>
      </div>
    </div>
  </div>
);

export default Card_mill;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_mill = () => (
         <div>
          <div className="container">
  <div className="box">
    <div className="content">
      
    </div>
  </div>
</div>
        </div>
        );

        export default Card_mill;
        
        
         */
}
