import React from "react";
import styles from "./Loader_having.module.css";

const Loader_having = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["react-star"]}>
        <div className={styles["nucleus"]}></div>
        <div className={styles["electron"] + styles["electron1"]}></div>
        <div className={styles["electron"] + styles["electron2"]}></div>
        <div className={styles["electron"] + styles["electron3"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_having;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_having = () => (
         <div>
          <div className="loader">
  <div className="react-star">
    <div className="nucleus"></div>
    <div className="electron electron1"></div>
    <div className="electron electron2"></div>
    <div className="electron electron3"></div>
  </div>
</div>
        </div>
        );

        export default Loader_having;
        
        
         */
}
