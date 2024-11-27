import React from "react";
import styles from "./Loader_town.module.css";

const Loader_town = () => (
  <div>
    <div className={styles["arrow"]}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

export default Loader_town;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_town = () => (
         <div>
          <div className="arrow">
    <span></span>
    <span></span>
    <span></span>
</div>
        </div>
        );

        export default Loader_town;
        
        
         */
}
