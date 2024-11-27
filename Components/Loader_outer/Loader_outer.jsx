import React from "react";
import styles from "./Loader_outer.module.css";

const Loader_outer = () => (
  <div>
    <figure className={styles["loader"]}>
      <div className={styles["dot"] + styles["white"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
    </figure>
  </div>
);

export default Loader_outer;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_outer = () => (
         <div>
          <figure className="loader">
    <div className="dot white"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
</figure>
        </div>
        );

        export default Loader_outer;
        
        
         */
}
