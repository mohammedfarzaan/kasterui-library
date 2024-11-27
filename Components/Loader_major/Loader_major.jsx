import React from "react";
import styles from "./Loader_major.module.css";

const Loader_major = () => (
  <div>
    <div className={styles["wrapper"]}>
      <div className={styles["hoop"]}></div>
      <div className={styles["sphere1"]}></div>
      <div className={styles["sphere2"]}></div>
    </div>
  </div>
);

export default Loader_major;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_major = () => (
         <div>
          <div className="wrapper">
		<div className="hoop"></div>
		<div className="sphere1"></div>
		<div className="sphere2"></div>	
	</div>
        </div>
        );

        export default Loader_major;
        
        
         */
}
