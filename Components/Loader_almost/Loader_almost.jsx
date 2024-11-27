import React from "react";
import styles from "./Loader_almost.module.css";

const Loader_almost = () => (
  <div>
    <div className={styles["spinner"]}>
      <div className={styles["Spinner"]}></div>
    </div>
  </div>
);

export default Loader_almost;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_almost = () => (
         <div>
          <div className="spinner">
    <div className="Spinner"></div>
    </div>
        </div>
        );

        export default Loader_almost;
        
        
         */
}
