import React from "react";
import styles from "./Toggle_hot.module.css";

const Toggle_hot = () => (
  <div>
    <label className={styles["buttons__burger"]} for="burger">
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
);

export default Toggle_hot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_hot = () => (
         <div>
          <label className="buttons__burger" for="burger">
    <input type="checkbox" id="burger" />
    <span></span>
    <span></span>
    <span></span>
</label>
        </div>
        );

        export default Toggle_hot;
        
        
         */
}
