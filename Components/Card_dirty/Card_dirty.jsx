import React from "react";
import styles from "./Card_dirty.module.css";

const Card_dirty = () => (
  <div>
    <div className={styles["card"] + styles["shadow"]}>
      <div className={styles["ribbon"]}>
        <div className={styles["ribbon-stitches-top"]}></div>
        <div className={styles["ribbon-content"]}>
          <span>Text Here</span>
        </div>
        <div className={styles["ribbon-stitches-bottom"]}></div>
      </div>
    </div>
  </div>
);

export default Card_dirty;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_dirty = () => (
         <div>
          <div className="card shadow">

<div className="ribbon">
    <div className="ribbon-stitches-top"></div>
    <div className="ribbon-content">
        <span>Text Here</span>
    </div>
    <div className="ribbon-stitches-bottom"></div>
</div>
</div>
        </div>
        );

        export default Card_dirty;
        
        
         */
}
