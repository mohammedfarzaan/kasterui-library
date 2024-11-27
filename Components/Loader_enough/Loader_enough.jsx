import React from "react";
import styles from "./Loader_enough.module.css";

const Loader_enough = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
      <div className={styles["dot"]}></div>
    </div>
  </div>
);

export default Loader_enough;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_enough = () => (
         <div>
          <div className="loader">
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
</div>
        </div>
        );

        export default Loader_enough;
        
        
         */
}
