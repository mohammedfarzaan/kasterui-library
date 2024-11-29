import React from "react";
import styles from "./Card_out.module.css";

const Card_out = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["shadow"]}>⚠ Always follow traffic rules.</div>
    </div>
  </div>
);

export default Card_out;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_out = () => (
         <div>
          <div className="card">
  <div className="shadow">⚠ Always follow traffic rules.</div>
</div>
        </div>
        );

        export default Card_out;
        
        
         */
}
