import React from "react";
import styles from "./Loader_pure.module.css";

const Loader_pure = () => (
  <div>
    <div className={styles["moon"]}>
      <div className={styles["shadow"]}></div>
    </div>
  </div>
);

export default Loader_pure;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_pure = () => (
         <div>
          <div className="moon">
  <div className="shadow"></div>
</div>
        </div>
        );

        export default Loader_pure;
        
        
         */
}
