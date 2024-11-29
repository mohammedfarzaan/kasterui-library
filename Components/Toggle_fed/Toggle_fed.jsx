import React from "react";
import styles from "./Toggle_fed.module.css";

const Toggle_fed = () => (
  <div>
    <div className={styles["form"]}>
      <input type="checkbox" id="bubble" />
      <label className={styles["bubble"]} for="bubble"></label>
    </div>
  </div>
);

export default Toggle_fed;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_fed = () => (
         <div>
          <div className="form">
<input type="checkbox" id="bubble" />
<label className="bubble" for="bubble"></label>
</div>
        </div>
        );

        export default Toggle_fed;
        
        
         */
}
