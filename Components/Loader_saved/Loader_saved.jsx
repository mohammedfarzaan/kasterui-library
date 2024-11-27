import React from "react";
import styles from "./Loader_saved.module.css";

const Loader_saved = () => (
  <div>
    <div className={styles["load"]}>
      <div className={styles["progress"]}></div>
      <div className={styles["progress"]}></div>
      <div className={styles["progress"]}></div>
    </div>
  </div>
);

export default Loader_saved;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_saved = () => (
         <div>
          <div className="load">
    <div className="progress"></div>
    <div className="progress"></div>
    <div className="progress"></div>
</div>
        </div>
        );

        export default Loader_saved;
        
        
         */
}
