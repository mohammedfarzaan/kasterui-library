import React from "react";
import styles from "./Loader_exist.module.css";

const Loader_exist = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["square-1"] + styles["square"]}></div>
      <div className={styles["square-2"] + styles["square"]}></div>
    </div>
  </div>
);

export default Loader_exist;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_exist = () => (
         <div>
          <div className="loader">
  <div className="square-1 square"></div>
  <div className="square-2 square"></div>
</div>
        </div>
        );

        export default Loader_exist;
        
        
         */
}
