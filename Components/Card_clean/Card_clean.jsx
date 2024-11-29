import React from "react";
import styles from "./Card_clean.module.css";

const Card_clean = () => (
  <div>
    <div className={styles["cardBox"]}>
      <div className={styles["card"]}>
        <span className={styles["text"]}>Hover Me</span>
        <div className={styles["content"]}>
          <p>Hi, put your text here</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card_clean;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_clean = () => (
         <div>
          <div className="cardBox">
  <div className="card">
    <span className="text">Hover Me</span>
    <div className="content">
      <p>Hi, put your text here</p>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_clean;
        
        
         */
}
