import React from "react";
import styles from "./Loader_effect.module.css";

const Loader_effect = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["square"]}>
        <div className={styles["mini_square"] + styles["sq-1"]}></div>
        <div className={styles["mini_square"] + styles["sq-2"]}></div>
        <div className={styles["mini_square"]}></div>
        <div className={styles["mini_square"] + styles["sq-4"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_effect;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_effect = () => (
         <div>
          <div className="loader">
  <div className="square">
    <div className="mini_square sq-1"></div>
    <div className="mini_square sq-2"></div>
    <div className="mini_square"></div>
    <div className="mini_square sq-4"></div>
  </div>
</div>
        </div>
        );

        export default Loader_effect;
        
        
         */
}
