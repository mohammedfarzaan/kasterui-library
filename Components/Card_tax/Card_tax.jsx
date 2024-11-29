import React from "react";
import styles from "./Card_tax.module.css";

const Card_tax = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["header"]}>
        <div className={styles["btn"]}></div>
        <div className={styles["btn"]}></div>
        <div className={styles["btn"]}></div>
        <div className={styles["active"]}>JS console...</div>
      </div>
      <div className={styles["content"]}>
        <div className={styles["req"]}>
          console.log(a<span>*</span>b);
        </div>
        <div className={styles["res"] + styles["error"]}>
          <span>ReferenceError</span>
          {" <span>a is not defined </span>"}
        </div>
        <div className={styles["req"]}>
          console.log(2<span>*</span>3);
        </div>
        <div className={styles["res"]}>6</div>
      </div>
    </div>
  </div>
);

export default Card_tax;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_tax = () => (
         <div>
          <div className="card">
  <div className="header">
    <div className="btn"></div>
    <div className="btn"></div>
    <div className="btn"></div>
    <div className="active">JS console...</div>
  </div>
  <div className="content">
  <div className="req">
     console.log(a<span>*</span>b);
  </div>
  <div className="res error">
    <span>ReferenceError</span>{" <span>a is not defined </span>"}
  </div>
   <div className="req">
     console.log(2<span>*</span>3);
  </div>
  <div className="res">
   6
  </div>
 
  </div>

</div>
        </div>
        );

        export default Card_tax;
        
        
         */
}
