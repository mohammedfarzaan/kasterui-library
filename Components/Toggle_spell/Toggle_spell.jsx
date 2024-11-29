import React from "react";
import styles from "./Toggle_spell.module.css";

const Toggle_spell = () => (
  <div>
    <input type="checkbox" name="check-toggle" id="checkbox" hidden="" />
    <label for="checkbox" className={styles["toggle"]}>
      <div className={styles["toggle__circle"]}></div>
    </label>
  </div>
);

export default Toggle_spell;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_spell = () => (
         <div>
          <input type="checkbox" name="check-toggle" id="checkbox" hidden="" />
        <label for="checkbox" className="toggle">
            <div className="toggle__circle"></div>
        </label>
        </div>
        );

        export default Toggle_spell;
        
        
         */
}
