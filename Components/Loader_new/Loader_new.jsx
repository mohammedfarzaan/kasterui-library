import React from "react";
import styles from "./Loader_new.module.css";

const Loader_new = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["box-load1"]}></div>
      <div className={styles["box-load2"]}></div>
      <div className={styles["box-load3"]}></div>
    </div>
  </div>
);

export default Loader_new;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_new = () => (
         <div>
          <div className="loader">
  <div className="box-load1"></div>
  <div className="box-load2"></div>
  <div className="box-load3"></div>
</div>
        </div>
        );

        export default Loader_new;
        
        
         */
}
