import React from "react";
import styles from "./Loader_writer.module.css";

const Loader_writer = () => (
  <div>
    <div className={styles["spinner"]}>
      <div className={styles["spinnerin"]}></div>
    </div>
  </div>
);

export default Loader_writer;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_writer = () => (
         <div>
          <div className="spinner">
    <div className="spinnerin"></div>
</div>
        </div>
        );

        export default Loader_writer;
        
        
         */
}
