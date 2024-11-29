import React from "react";
import styles from "./Card_ring.module.css";

const Card_ring = () => (
  <div>
    <div
      className={
        styles["bg-black"] +
        styles["py-5"] +
        styles["d-flex"] +
        styles["justify-content-center"] +
        styles["align-items-center"]
      }
    >
      <div className={styles["obj"]}>
        <div className={styles["objchild"]}>
          <span className={styles["inn6"]}></span>
        </div>
      </div>
    </div>
  </div>
);

export default Card_ring;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_ring = () => (
         <div>
          <div className="bg-black py-5 d-flex justify-content-center align-items-center">
    <div className="obj">
        <div className="objchild">
            <span className="inn6"></span>
        </div>
    </div>
</div>
        </div>
        );

        export default Card_ring;
        
        
         */
}
