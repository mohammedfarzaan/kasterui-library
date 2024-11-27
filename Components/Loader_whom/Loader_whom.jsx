import React from "react";
import styles from "./Loader_whom.module.css";

const Loader_whom = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["panWrapper"]}>
        <div className={styles["pan"]}>
          <div className={styles["food"]}></div>
          <div className={styles["panBase"]}></div>
          <div className={styles["panHandle"]}></div>
        </div>
        <div className={styles["panShadow"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_whom;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_whom = () => (
         <div>
          <div className="loader">
  <div className="panWrapper">
    <div className="pan">
      <div className="food"></div>
      <div className="panBase"></div>
      <div className="panHandle"></div>
    </div>
    <div className="panShadow"></div>
  </div>
</div>
        </div>
        );

        export default Loader_whom;
        
        
         */
}
