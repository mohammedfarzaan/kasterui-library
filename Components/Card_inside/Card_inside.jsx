import React from "react";
import styles from "./Card_inside.module.css";

const Card_inside = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["bg"]}></div>
      <div className={styles["blob"]}></div>
    </div>
  </div>
);

export default Card_inside;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_inside = () => (
         <div>
          <div className="card">
  <div className="bg"></div>
  <div className="blob"></div>
</div>
        </div>
        );

        export default Card_inside;
        
        
         */
}
