import React from "react";
import styles from "./Card_fine.module.css";

const Card_fine = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["box"]}>
        <div className={styles["content"]}>
          <span className={styles["card-title"]}>CSS Clip-Path </span>
          <div className={styles["text"]}>
            <strong>ELEKTRO RAKS</strong>
            <p>Custom card</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_fine;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_fine = () => (
         <div>
          <div className="card">
     <div className="box">
          <div className="content">
               <span className="card-title">CSS Clip-Path </span>
          <div className="text">
               <strong>ELEKTRO RAKS</strong>
               <p>Custom card</p>
          </div>
          </div>
     </div>
</div>
        </div>
        );

        export default Card_fine;
        
        
         */
}
