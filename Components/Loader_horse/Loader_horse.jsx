import React from "react";
import styles from "./Loader_horse.module.css";

const Loader_horse = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["pattern-1"]}>
        <div className={styles["pattern-1-shade"]}></div>
      </div>
      <div className={styles["pattern-2"]}></div>
    </div>
  </div>
);

export default Loader_horse;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_horse = () => (
         <div>
          <div className="loader">
  <div className="pattern-1">
    <div className="pattern-1-shade"></div>
  </div>
  <div className="pattern-2"></div>
</div>
        </div>
        );

        export default Loader_horse;
        
        
         */
}
