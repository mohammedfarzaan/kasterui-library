import React from "react";
import styles from "./Card_torn.module.css";

const Card_torn = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["top"]}>
        <p className={styles["title"]}>TITLE HERE</p>
      </div>
      <p className={styles["desc"]}>
        This is the description of this card.
        <br />
        You can enter anything here.
      </p>
    </div>
  </div>
);

export default Card_torn;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_torn = () => (
         <div>
          <div className="card">
  <div className="top">
    <p className="title">
      TITLE HERE
    </p>
  </div>
  <p className="desc">
    This is the description of this card.<br />You can enter anything here.
  </p>
</div>
        </div>
        );

        export default Card_torn;
        
        
         */
}
