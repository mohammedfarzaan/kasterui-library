import React from "react";
import styles from "./Loader_seed.module.css";

const Loader_seed = () => (
  <div>
    <div className={styles["loader"] + styles["JS_on"]}>
      <span className={styles["binary"]}></span>
      <span className={styles["binary"]}></span>
      <span className={styles["getting-there"]}>LOADING STUFF...</span>
    </div>
  </div>
);

export default Loader_seed;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_seed = () => (
         <div>
          <div className="loader JS_on">
	<span className="binary"></span>
	<span className="binary"></span>
	<span className="getting-there">LOADING STUFF...</span>
</div>
        </div>
        );

        export default Loader_seed;
        
        
         */
}
