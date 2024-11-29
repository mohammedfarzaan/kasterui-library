import React from "react";
import styles from "./Card_longer.module.css";

const Card_longer = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["content"]}></div>
    </div>
  </div>
);

export default Card_longer;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_longer = () => (
         <div>
          <div className="card">
    <div className="content"></div>
</div>
        </div>
        );

        export default Card_longer;
        
        
         */
}
