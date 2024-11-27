import React from "react";
import styles from "./Loader_seems.module.css";

const Loader_seems = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["box1"]}></div>
      <div className={styles["box2"]}></div>
      <div className={styles["box3"]}></div>
    </div>
  </div>
);

export default Loader_seems;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_seems = () => (
         <div>
          <div className="loader">
  <div className="box1"></div>
  <div className="box2"></div>
  <div className="box3"></div>
</div>
        </div>
        );

        export default Loader_seems;
        
        
         */
}
