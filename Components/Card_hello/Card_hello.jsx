import React from "react";
import styles from "./Card_hello.module.css";

const Card_hello = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["img-container"]}>
        <div className={styles["img"]}></div>
        <div className={styles["description"] + styles["card"]}>
          <span className={styles["title"]}>Card</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card_hello;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_hello = () => (
         <div>
          <div className="card">
    <div className="img-container">
        <div className="img">
        </div>
        <div className="description card">
            <span className="title">
                Card
            </span>
        </div>
    </div>
</div>
        </div>
        );

        export default Card_hello;
        
        
         */
}
