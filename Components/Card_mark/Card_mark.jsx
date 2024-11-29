import React from "react";
import styles from "./Card_mark.module.css";

const Card_mark = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-content"]}>
        <p className={styles["card-title"]}>hover effect</p>
        <p className={styles["card-para"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </div>
);

export default Card_mark;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_mark = () => (
         <div>
          <div className="card">
  <div className="card-content">
    <p className="card-title">hover effect
    </p><p className="card-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
        </div>
        );

        export default Card_mark;
        
        
         */
}
