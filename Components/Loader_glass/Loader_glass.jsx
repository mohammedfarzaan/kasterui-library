import React from "react";
import styles from "./Loader_glass.module.css";

const Loader_glass = () => (
  <div>
    <div className={styles["loader"]}>
      <span className={styles["item"]}></span>
      <span className={styles["item"]}></span>
      <span className={styles["item"]}></span>
      <span className={styles["item"]}></span>
    </div>
  </div>
);

export default Loader_glass;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_glass = () => (
         <div>
          <div className="loader">
  <span className="item"></span>
  <span className="item"></span>
  <span className="item"></span>
  <span className="item"></span>
</div>
        </div>
        );

        export default Loader_glass;
        
        
         */
}
