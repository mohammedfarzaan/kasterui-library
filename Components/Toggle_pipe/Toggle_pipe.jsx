import React from "react";
import styles from "./Toggle_pipe.module.css";

const Toggle_pipe = () => (
  <div>
    <div className={styles["toggle-border"]}>
      <input id="one" type="checkbox" />
      <label for="one">
        <div className={styles["handle"]}></div>
      </label>
    </div>
  </div>
);

export default Toggle_pipe;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_pipe = () => (
         <div>
          <div className="toggle-border">
  <input id="one" type="checkbox" />
  <label for="one">
    <div className="handle"></div>
  </label>
</div>
        </div>
        );

        export default Toggle_pipe;
        
        
         */
}
