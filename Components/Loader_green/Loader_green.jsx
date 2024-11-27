import React from "react";
import styles from "./Loader_green.module.css";

const Loader_green = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["inner_loader"]}></div>
    </div>
  </div>
);

export default Loader_green;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_green = () => (
         <div>
          <div className="loader">
  <div className="inner_loader"></div>
</div>
        </div>
        );

        export default Loader_green;
        
        
         */
}
