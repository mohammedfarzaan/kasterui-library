import React from "react";
import styles from "./Loader_cake.module.css";

const Loader_cake = () => (
  <div>
    <div className={styles["🤚"]}>
      <div className={styles["👉"]}></div>
      <div className={styles["👉"]}></div>
      <div className={styles["👉"]}></div>
      <div className={styles["👉"]}></div>
      <div className={styles["🌴"]}></div>
      <div className={styles["👍"]}></div>
    </div>
  </div>
);

export default Loader_cake;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_cake = () => (
         <div>
          <div className="🤚">
	<div className="👉"></div>
	<div className="👉"></div>
	<div className="👉"></div>
	<div className="👉"></div>
	<div className="🌴"></div>		
	<div className="👍"></div>
</div>
        </div>
        );

        export default Loader_cake;
        
        
         */
}
