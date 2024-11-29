import React from "react";
import styles from "./Loader_source.module.css";

const Loader_source = () => (
  <div>
    <div className={styles["textWrapper"]}>
      <p className={styles["text"]}>Loading...</p>
      <div className={styles["invertbox"]}></div>
    </div>
  </div>
);

export default Loader_source;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_source = () => (
         <div>
          <div className="textWrapper">
  <p className="text">Loading...</p>
  <div className="invertbox"></div>
</div>
        </div>
        );

        export default Loader_source;
        
        
         */
}
