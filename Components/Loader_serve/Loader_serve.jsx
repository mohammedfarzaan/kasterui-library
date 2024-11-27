import React from "react";
import styles from "./Loader_serve.module.css";

const Loader_serve = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["box"]}></div>
      <div className={styles["box"]}></div>
      <div className={styles["box"]}></div>
      <div className={styles["box"]}></div>
    </div>
  </div>
);

export default Loader_serve;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_serve = () => (
         <div>
          <div className="loader">
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
  <div className="box"></div>
</div>
        </div>
        );

        export default Loader_serve;
        
        
         */
}
