import React from "react";
import styles from "./Loader_very.module.css";

const Loader_very = () => (
  <div>
    <div className={styles["loader"]}>
      <label>Redirecting...</label>
      <div className={styles["loading"]}></div>
    </div>
  </div>
);

export default Loader_very;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_very = () => (
         <div>
          <div className="loader">
  <label>Redirecting...</label>
  <div className="loading"></div>
</div>
        </div>
        );

        export default Loader_very;
        
        
         */
}
