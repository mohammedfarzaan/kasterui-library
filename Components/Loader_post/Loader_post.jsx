import React from "react";
import styles from "./Loader_post.module.css";

const Loader_post = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["loader"]}>
        <span></span>
      </div>
      <div className={styles["loader"]}>
        <span></span>
      </div>
      <div className={styles["loader"]}>
        <i></i>
      </div>
      <div className={styles["loader"]}>
        <i></i>
      </div>
    </div>
  </div>
);

export default Loader_post;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_post = () => (
         <div>
          <div className="container">
        <div className="loader"><span></span></div>
        <div className="loader"><span></span></div>
        <div className="loader"><i></i></div>
        <div className="loader"><i></i></div>
    </div>
        </div>
        );

        export default Loader_post;
        
        
         */
}
