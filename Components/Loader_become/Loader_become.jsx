import React from "react";
import styles from "./Loader_become.module.css";

const Loader_become = () => (
  <div>
    <div className={styles["ui-abstergo"]}>
      <div className={styles["abstergo-loader"]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles["ui-text"]}>
        Synchronization
        <div className={styles["ui-dot"]}></div>
        <div className={styles["ui-dot"]}></div>
        <div className={styles["ui-dot"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_become;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_become = () => (
         <div>
          <div className="ui-abstergo">
  <div className="abstergo-loader">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div className="ui-text">
    Synchronization
    <div className="ui-dot"></div>
    <div className="ui-dot"></div>
    <div className="ui-dot"></div>
  </div>
</div>
        </div>
        );

        export default Loader_become;
        
        
         */
}
