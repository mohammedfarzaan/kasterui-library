import React from "react";
import styles from "./Toggle_deep.module.css";

const Toggle_deep = () => (
  <div>
    <div className={styles["checkbox-wrapper-25"]}>
      <input type="checkbox" />
    </div>
  </div>
);

export default Toggle_deep;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_deep = () => (
         <div>
          <div className="checkbox-wrapper-25">
  <input type="checkbox" />
</div>
        </div>
        );

        export default Toggle_deep;
        
        
         */
}
