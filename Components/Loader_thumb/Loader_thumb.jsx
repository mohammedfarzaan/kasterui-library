import React from "react";
import styles from "./Loader_thumb.module.css";

const Loader_thumb = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["quater"] + styles["i"]}></div>
      <div className={styles["quater"] + styles["ii"]}></div>
    </div>
  </div>
);

export default Loader_thumb;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_thumb = () => (
         <div>
          <div className="loader">
    <div className="quater i"></div>
    <div className="quater ii"></div>
</div>
        </div>
        );

        export default Loader_thumb;
        
        
         */
}
