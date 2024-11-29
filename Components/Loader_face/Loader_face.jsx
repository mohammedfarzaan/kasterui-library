import React from "react";
import styles from "./Loader_face.module.css";

const Loader_face = () => (
  <div>
    <div className={styles["cssload-main"]}>
      <div className={styles["cssload-heart"]}>
        <span className={styles["cssload-heartL"]}></span>
        <span className={styles["cssload-heartR"]}></span>
        <span className={styles["cssload-square"]}></span>
      </div>
      <div className={styles["cssload-shadow"]}></div>
    </div>
  </div>
);

export default Loader_face;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_face = () => (
         <div>
          <div className="cssload-main">
	<div className="cssload-heart">
		<span className="cssload-heartL"></span>
		<span className="cssload-heartR"></span>
		<span className="cssload-square"></span>
	</div>
	<div className="cssload-shadow"></div>
</div>
        </div>
        );

        export default Loader_face;
        
        
         */
}
