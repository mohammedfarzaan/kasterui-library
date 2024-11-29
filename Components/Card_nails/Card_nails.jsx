import React from "react";
import styles from "./Card_nails.module.css";

const Card_nails = () => (
  <div>
    <div className={styles["card5"]}>
      <div className={styles["card5-content"]}>
        <span>Card Title</span>
        <p>Card description goes here.</p>
      </div>
    </div>
  </div>
);

export default Card_nails;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_nails = () => (
         <div>
          <div className="card5">
  <div className="card5-content">
    <span>Card Title</span>
    <p>Card description goes here.</p>
  </div>
</div>
        </div>
        );

        export default Card_nails;
        
        
         */
}
