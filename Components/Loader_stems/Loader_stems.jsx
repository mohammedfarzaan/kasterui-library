import React from "react";
import styles from "./Loader_stems.module.css";

const Loader_stems = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["face"]}>
        <div className={styles["circle"]}></div>
      </div>
      <div className={styles["face"]}>
        <div className={styles["circle"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_stems;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_stems = () => (
         <div>
          <div className="loader">
    <div className="face">
        <div className="circle"></div>
    </div>
    <div className="face">
        <div className="circle"></div>
    </div>
</div>
        </div>
        );

        export default Loader_stems;
        
        
         */
}
