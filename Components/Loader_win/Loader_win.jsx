import React from "react";
import styles from "./Loader_win.module.css";

const Loader_win = () => (
  <div>
    <div className={styles["milk-loader"]}>
      <div className={styles["glass"]}>
        <div className={styles["milk"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_win;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_win = () => (
         <div>
          <div className="milk-loader">
  <div className="glass">
    <div className="milk"></div>
  </div>
</div>
        </div>
        );

        export default Loader_win;
        
        
         */
}
