import React from "react";
import styles from "./Loader_smell.module.css";

const Loader_smell = () => (
  <div>
    <div className={styles["centered"]}>
      <div className={styles["blob-1"]}></div>
      <div className={styles["blob-2"]}></div>
    </div>
  </div>
);

export default Loader_smell;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_smell = () => (
         <div>
          <div className="centered">
	<div className="blob-1"></div>
	<div className="blob-2"></div>
</div>
        </div>
        );

        export default Loader_smell;
        
        
         */
}
