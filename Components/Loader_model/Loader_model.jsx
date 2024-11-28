import React from "react";
import styles from "./Loader_model.module.css";

const Loader_model = () => (
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

export default Loader_model;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_model = () => (
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

        export default Loader_model;
        
        
         */
}
