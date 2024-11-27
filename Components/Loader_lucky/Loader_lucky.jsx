import React from "react";
import styles from "./Loader_lucky.module.css";

const Loader_lucky = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loaders"]}></div>
      <div className={styles["loaders"]}></div>
      <div className={styles["loaders"]}></div>
      <div className={styles["loaders"]}></div>
      <div className={styles["loaders"]}></div>
      <div className={styles["loaders"]}></div>
      <div className={styles["loaders"]}></div>
      <div className={styles["loaders"]}></div>
    </div>
  </div>
);

export default Loader_lucky;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_lucky = () => (
         <div>
          <div className="loader">
    <div className="loaders"></div>
    <div className="loaders"></div>
    <div className="loaders"></div>
    <div className="loaders"></div>
    <div className="loaders"></div>
    <div className="loaders"></div>
    <div className="loaders"></div>
    <div className="loaders"></div>
</div>
        </div>
        );

        export default Loader_lucky;
        
        
         */
}
