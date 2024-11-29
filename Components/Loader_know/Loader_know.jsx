import React from "react";
import styles from "./Loader_know.module.css";

const Loader_know = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["loader"]}></div>
      <div className={styles["loader"]}></div>
      <div className={styles["loader"]}></div>
    </div>
  </div>
);

export default Loader_know;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_know = () => (
         <div>
          <div className="container">
	<div className="loader"></div>
	<div className="loader"></div>
	<div className="loader"></div>
</div>
        </div>
        );

        export default Loader_know;
        
        
         */
}
