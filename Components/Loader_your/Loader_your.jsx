import React from "react";
import styles from "./Loader_your.module.css";

const Loader_your = () => (
  <div>
    <div className={styles["progress-loader"]}>
      <div className={styles["progress"]}></div>
    </div>
  </div>
);

export default Loader_your;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_your = () => (
         <div>
          <div className="progress-loader">
  <div className="progress"></div>
</div>
        </div>
        );

        export default Loader_your;
        
        
         */
}
