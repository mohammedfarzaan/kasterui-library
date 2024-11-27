import React from "react";
import styles from "./Loader_stems.module.css";

const Loader_stems = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["box-1"]}></div>
      <div className={styles["box-2"]}></div>
      <div className={styles["box-3"]}></div>
    </div>
  </div>
);

export default Loader_stems;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_stems = () => (
         <div>
          <div className="loader">
  <div className="box-1"></div>
  <div className="box-2"></div>
  <div className="box-3"></div>
</div>
        </div>
        );

        export default Loader_stems;
        
        
         */
}
