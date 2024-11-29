import React from "react";
import styles from "./Toggle_camp.module.css";

const Toggle_camp = () => (
  <div>
    <div className={styles["check"]}>
      <input id="check" type="checkbox" />
      <label for="check"></label>
    </div>
  </div>
);

export default Toggle_camp;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_camp = () => (
         <div>
          <div className="check">
  <input id="check" type="checkbox" />
  <label for="check"></label>
</div>
        </div>
        );

        export default Toggle_camp;
        
        
         */
}
