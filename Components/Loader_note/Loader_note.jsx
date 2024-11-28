import React from "react";
import styles from "./Loader_note.module.css";

const Loader_note = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["box"]}></div>
      <div className={styles["circle"]}></div>
      <div className={styles["triangle"]}></div>
    </div>
  </div>
);

export default Loader_note;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_note = () => (
         <div>
          <div className="loader">
  <div className="box"></div>
  <div className="circle"></div>
  <div className="triangle"></div>
</div>
        </div>
        );

        export default Loader_note;
        
        
         */
}
