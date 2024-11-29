import React from "react";
import styles from "./Toggle_eager.module.css";

const Toggle_eager = () => (
  <div>
    <input name="switch" id="switch" type="checkbox" />
    <label className={styles["switch"]} for="switch"></label>
  </div>
);

export default Toggle_eager;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_eager = () => (
         <div>
          <input name="switch" id="switch" type="checkbox" />
  <label className="switch" for="switch"></label>
        </div>
        );

        export default Toggle_eager;
        
        
         */
}
