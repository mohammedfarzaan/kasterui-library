import React from "react";
import styles from "./Loader_pan.module.css";

const Loader_pan = () => (
  <div>
    <div className={styles["loader"]}>
      <span className={styles["loader-text"]}>Loading...</span>
    </div>
  </div>
);

export default Loader_pan;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_pan = () => (
         <div>
          <div className="loader">
<span className="loader-text">Loading...</span>
</div>
        </div>
        );

        export default Loader_pan;
        
        
         */
}
