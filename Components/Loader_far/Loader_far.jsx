import React from "react";
import styles from "./Loader_far.module.css";

const Loader_far = () => (
  <div>
    <div className={styles["loader"]}>
      <figure className={styles["iconLoaderProgress"]}>
        <svg className="iconLoaderProgressFirst" width="240" height="240">
          <circle cx="120" cy="120" r="100"></circle>
        </svg>

        <svg className="iconLoaderProgressSecond" width="240" height="240">
          <circle cx="120" cy="120" r="100"></circle>
        </svg>
      </figure>
    </div>
  </div>
);

export default Loader_far;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_far = () => (
         <div>
          <div className="loader">
  <figure className="iconLoaderProgress">
    <svg className="iconLoaderProgressFirst" width="240" height="240">
      <circle cx="120" cy="120" r="100"></circle>
    </svg>

    <svg className="iconLoaderProgressSecond" width="240" height="240">
      <circle cx="120" cy="120" r="100"></circle>
    </svg>
  </figure>
</div>
        </div>
        );

        export default Loader_far;
        
        
         */
}
