import React from "react";
import styles from "./Loader_poetry.module.css";

const Loader_poetry = () => (
  <div>
    <div id="js-preloader" className={styles["js-preloader"]}>
      <div className={styles["preloader-inner"]}>
        <span className={styles["dot"]}></span>
        <div className={styles["dots"]}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_poetry;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_poetry = () => (
         <div>
          <div id="js-preloader" className="js-preloader">
      <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
              <span></span>
              <span></span>
              <span></span>
          </div>
      </div>
  </div>
        </div>
        );

        export default Loader_poetry;
        
        
         */
}
