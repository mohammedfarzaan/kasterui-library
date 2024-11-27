import React from "react";
import styles from "./Loader_drawn.module.css";

const Loader_drawn = () => (
  <div>
    <div className={styles["coin"]}>
      <span className={styles["engraving"]}>$</span>
    </div>
  </div>
);

export default Loader_drawn;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_drawn = () => (
         <div>
          <div className="coin">
  <span className="engraving">$</span>
</div>
        </div>
        );

        export default Loader_drawn;
        
        
         */
}
