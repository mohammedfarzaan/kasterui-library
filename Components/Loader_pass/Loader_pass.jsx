import React from "react";
import styles from "./Loader_pass.module.css";

const Loader_pass = () => (
  <div>
    <label className={styles["loader"]}>
      <span className={styles["slider"]}></span>
    </label>
  </div>
);

export default Loader_pass;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_pass = () => (
         <div>
          <label className="loader">
  <span className="slider"></span>
</label>
        </div>
        );

        export default Loader_pass;
        
        
         */
}
