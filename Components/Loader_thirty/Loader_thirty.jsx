import React from "react";
import styles from "./Loader_thirty.module.css";

const Loader_thirty = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["layer"]}>loading</div>
      <div className={styles["layer"]}>loading</div>
    </div>
  </div>
);

export default Loader_thirty;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_thirty = () => (
         <div>
          <div className="loader">
  <div className="layer">loading</div>
  <div className="layer">loading</div>
</div>
        </div>
        );

        export default Loader_thirty;
        
        
         */
}
