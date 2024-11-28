import React from "react";
import styles from "./Loader_load.module.css";

const Loader_load = () => (
  <div>
    <div className={styles["loader"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader_load;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_load = () => (
         <div>
          <div className="loader">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>
        </div>
        );

        export default Loader_load;
        
        
         */
}