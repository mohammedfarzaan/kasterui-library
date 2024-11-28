import React from "react";
import styles from "./Loader_skill.module.css";

const Loader_skill = () => (
  <div>
    <div className={styles["superballs"]}>
      <div className={styles["superballs__dot"]}></div>
      <div className={styles["superballs__dot"]}></div>
    </div>
  </div>
);

export default Loader_skill;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_skill = () => (
         <div>
          <div className="superballs">
    <div className="superballs__dot"></div>
    <div className="superballs__dot"></div>
</div>
        </div>
        );

        export default Loader_skill;
        
        
         */
}
