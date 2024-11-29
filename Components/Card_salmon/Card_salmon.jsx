import React from "react";
import styles from "./Card_salmon.module.css";

const Card_salmon = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["first-content"]}>
        <span>First</span>
      </div>
      <div className={styles["second-content"]}>
        <span>Second</span>
      </div>
    </div>
  </div>
);

export default Card_salmon;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_salmon = () => (
         <div>
          <div className="card">
  <div className="first-content">
    <span>First</span>
  </div>
  <div className="second-content">
<span>Second</span>
  </div>


</div>
        </div>
        );

        export default Card_salmon;
        
        
         */
}
