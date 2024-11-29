import React from "react";
import styles from "./Card_thirty.module.css";

const Card_thirty = () => (
  <div>
    <div className={styles["myCard"]}>
      <div className={styles["innerCard"]}>
        <div className={styles["frontSide"]}>
          <p className={styles["title"]}>FRONT SIDE</p>
          <p>Hover Me</p>
        </div>
        <div className={styles["backSide"]}>
          <p className={styles["title"]}>BACK SIDE</p>
          <p>Leave Me</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card_thirty;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_thirty = () => (
         <div>
          <div className="myCard">
        <div className="innerCard">
            <div className="frontSide">
                <p className="title">FRONT SIDE</p>
                <p>Hover Me</p>
            </div>
            <div className="backSide">
                <p className="title">BACK SIDE</p>
                <p>Leave Me</p>
            </div>
        </div>
    </div>
        </div>
        );

        export default Card_thirty;
        
        
         */
}
