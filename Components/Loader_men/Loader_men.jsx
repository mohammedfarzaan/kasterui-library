import React from "react";
import styles from "./Loader_men.module.css";

const Loader_men = () => (
  <div>
    <div className={styles["space-loader"]}>
      <div id="stars" className={styles["stars"]}></div>
      <div className={styles["orbit"]}></div>
      <div className={styles["ring"]}></div>
      <div className={styles["planet"]}></div>
      <div className={styles["satellite"]}></div>
    </div>
  </div>
);

export default Loader_men;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_men = () => (
         <div>
          <div className="space-loader">
  <div id="stars" className="stars"></div>
  <div className="orbit"></div>
  <div className="ring"></div>
  <div className="planet"></div>
  <div className="satellite"></div>
</div>
        </div>
        );

        export default Loader_men;
        
        
         */
}
