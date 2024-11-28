import React from "react";
import styles from "./Toggle_turn.module.css";

const Toggle_turn = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" checked="" />
    </label>
  </div>
);

export default Toggle_turn;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_turn = () => (
         <div>
          <label className="switch">
  <input type="checkbox" checked="" />
</label>
        </div>
        );

        export default Toggle_turn;
        
        
         */
}
