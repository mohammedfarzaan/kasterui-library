import React from "react";
import styles from "./Loader_under.module.css";

const Loader_under = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["magnetism"]}></div>
    </div>
  </div>
);

export default Loader_under;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_under = () => (
         <div>
          <div className="loader">
  <div className="magnetism"></div>
</div>
        </div>
        );

        export default Loader_under;
        
        
         */
}
