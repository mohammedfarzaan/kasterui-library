import React from "react";
import styles from "./Toggle_tie.module.css";

const Toggle_tie = () => (
  <div>
    <div className={styles["bauble_box"]}>
      <input
        className={styles["bauble_input"]}
        id="bauble_check"
        name="bauble"
        type="checkbox"
      />
      <label className={styles["bauble_label"]} for="bauble_check">
        Toggle
      </label>
    </div>
  </div>
);

export default Toggle_tie;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_tie = () => (
         <div>
          <div className="bauble_box">
	<input className="bauble_input" id="bauble_check" name="bauble" type="checkbox" />
	<label className="bauble_label" for="bauble_check">Toggle</label>
</div>
        </div>
        );

        export default Toggle_tie;
        
        
         */
}
