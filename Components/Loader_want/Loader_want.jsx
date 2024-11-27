import React from "react";
import styles from "./Loader_want.module.css";

const Loader_want = () => (
  <div>
    <div className={styles["loader"]}>
      Loading
      <span></span>
    </div>
  </div>
);

export default Loader_want;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_want = () => (
         <div>
          <div className="loader">Loading
  <span></span>
</div>
        </div>
        );

        export default Loader_want;
        
        
         */
}
