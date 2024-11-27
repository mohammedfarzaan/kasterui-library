import React from "react";
import styles from "./Loader_lay.module.css";

const Loader_lay = () => (
  <div>
    <div className={styles["loader"]}>
      <span className={styles["hour"]}></span>
      <span className={styles["min"]}></span>
      <span className={styles["circel"]}></span>
    </div>
  </div>
);

export default Loader_lay;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_lay = () => (
         <div>
          <div className="loader">
  <span className="hour"></span>
  <span className="min"></span>
  <span className="circel"></span>
</div>
        </div>
        );

        export default Loader_lay;
        
        
         */
}
