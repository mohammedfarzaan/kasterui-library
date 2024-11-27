import React from "react";
import styles from "./Loader_title.module.css";

const Loader_title = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader-small"]}></div>
      <div className={styles["loader-large"]}></div>
    </div>
  </div>
);

export default Loader_title;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_title = () => (
         <div>
          <div className="loader">
  <div className="loader-small"></div>
  <div className="loader-large"></div>
</div>
        </div>
        );

        export default Loader_title;
        
        
         */
}
