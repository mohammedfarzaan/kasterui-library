import React from "react";
import styles from "./Loader_cave.module.css";

const Loader_cave = () => (
  <div>
    <div className={styles["loading-bar"]}>Loading</div>
  </div>
);

export default Loader_cave;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_cave = () => (
         <div>
          <div className="loading-bar">
    Loading
</div>
        </div>
        );

        export default Loader_cave;
        
        
         */
}
