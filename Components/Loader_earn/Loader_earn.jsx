import React from "react";
import styles from "./Loader_earn.module.css";

const Loader_earn = () => (
  <div>
    <div className={styles["loader"]}>
      <div
        className={
          styles["justify-content-center"] + styles["jimu-primary-loading"]
        }
      ></div>
    </div>
  </div>
);

export default Loader_earn;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_earn = () => (
         <div>
          <div className="loader">
  <div className="justify-content-center jimu-primary-loading"></div>
</div>
        </div>
        );

        export default Loader_earn;
        
        
         */
}
