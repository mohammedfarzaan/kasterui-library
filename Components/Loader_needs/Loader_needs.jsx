import React from "react";
import styles from "./Loader_needs.module.css";

const Loader_needs = () => (
  <div>
    <div className={styles["loader"]}>
      <span className={styles["loader-text"]}>loading</span>
      <span className={styles["load"]}></span>
    </div>
  </div>
);

export default Loader_needs;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_needs = () => (
         <div>
          <div className="loader">
    <span className="loader-text">loading</span>
      <span className="load"></span>
  </div>
        </div>
        );

        export default Loader_needs;
        
        
         */
}
