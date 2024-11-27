import React from "react";
import styles from "./Loader_wait.module.css";

const Loader_wait = () => (
  <div>
    <div className={styles["loader"]}>
      <span>Loading...</span>
    </div>
  </div>
);

export default Loader_wait;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_wait = () => (
         <div>
          <div className="loader">
    <span>Loading...</span>
</div>
        </div>
        );

        export default Loader_wait;
        
        
         */
}
