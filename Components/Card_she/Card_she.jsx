import React from "react";
import styles from "./Card_she.module.css";

const Card_she = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["image"]}>
        <span className={styles["text"]}>This is a chair.</span>
      </div>
      <span className={styles["title"]}>Cool Chair</span>
      <span className={styles["price"]}>$100</span>
    </div>
  </div>
);

export default Card_she;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_she = () => (
         <div>
          <div className="card">
<div className="image"><span className="text">This is a chair.</span></div>
  <span className="title">Cool Chair</span>
  <span className="price">$100</span>
</div>
        </div>
        );

        export default Card_she;
        
        
         */
}
