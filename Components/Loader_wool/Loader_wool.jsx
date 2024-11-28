import React from "react";
import styles from "./Loader_wool.module.css";

const Loader_wool = () => (
  <div>
    <div className={styles["textWrapper"]}>
      <p className={styles["text"]}>Loading...</p>
      <div className={styles["invertbox"]}></div>
    </div>
  </div>
);

export default Loader_wool;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_wool = () => (
         <div>
          <div className="textWrapper">
  <p className="text">Loading...</p>
  <div className="invertbox"></div>
</div>
        </div>
        );

        export default Loader_wool;
        
        
         */
}
