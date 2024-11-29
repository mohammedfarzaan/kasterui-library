import React from "react";
import styles from "./Toggle_uncle.module.css";

const Toggle_uncle = () => (
  <div>
    <div className={styles["checkbox-con"]}>
      <input id="checkbox" type="checkbox" />
    </div>
  </div>
);

export default Toggle_uncle;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_uncle = () => (
         <div>
          <div className="checkbox-con">
  <input id="checkbox" type="checkbox" />
</div>
        </div>
        );

        export default Toggle_uncle;
        
        
         */
}
