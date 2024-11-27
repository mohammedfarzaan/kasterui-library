import React from "react";
import styles from "./Loader_length.module.css";

const Loader_length = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
      <div className={styles["bar"]}></div>
    </div>
  </div>
);

export default Loader_length;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_length = () => (
         <div>
          <div className="loader">
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
  <div className="bar"></div>
</div>
        </div>
        );

        export default Loader_length;
        
        
         */
}
