import React from "react";
import styles from "./Loader_sick.module.css";

const Loader_sick = () => (
  <div>
    <div className={styles["eye-lid"]}>
      <div className={styles["eye"]}>
        <div className={styles["cornea"]}>
          <div className={styles["white-pupil"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_sick;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_sick = () => (
         <div>
          <div className="eye-lid">
    <div className="eye">
      <div className="cornea">
        <div className="white-pupil"></div>
      </div>
    </div>
  </div>
        </div>
        );

        export default Loader_sick;
        
        
         */
}
