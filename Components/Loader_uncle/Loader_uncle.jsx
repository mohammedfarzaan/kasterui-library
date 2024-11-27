import React from "react";
import styles from "./Loader_uncle.module.css";

const Loader_uncle = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["face"]}>
        <div className={styles["circle"]}></div>
      </div>
      <div className={styles["face"]}>
        <div className={styles["circle"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_uncle;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_uncle = () => (
         <div>
          <div className="loader">
    <div className="face">
        <div className="circle"></div>
    </div>
    <div className="face">
        <div className="circle"></div>
    </div>
</div>
        </div>
        );

        export default Loader_uncle;
        
        
         */
}
