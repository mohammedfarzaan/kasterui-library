import React from "react";
import styles from "./Loader_brass.module.css";

const Loader_brass = () => (
  <div>
    <div className={styles["loader"]}>
      <div data-glitch="Loading..." className={styles["glitch"]}>
        Loading...
      </div>
    </div>
  </div>
);

export default Loader_brass;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_brass = () => (
         <div>
          <div className="loader">
   <div data-glitch="Loading..." className="glitch">Loading...</div>
</div>
        </div>
        );

        export default Loader_brass;
        
        
         */
}
