import React from "react";
import styles from "./Loader_leader.module.css";

const Loader_leader = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["block"]}></div>
      <div className={styles["block"]}></div>
      <div className={styles["block"]}></div>
      <div className={styles["block"]}></div>
    </div>
  </div>
);

export default Loader_leader;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_leader = () => (
         <div>
          <div className="container">
  <div className="block"></div>
  <div className="block"></div>
  <div className="block"></div>
  <div className="block"></div>
</div>
        </div>
        );

        export default Loader_leader;
        
        
         */
}
