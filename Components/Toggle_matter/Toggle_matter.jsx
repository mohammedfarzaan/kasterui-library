import React from "react";
import styles from "./Toggle_matter.module.css";

const Toggle_matter = () => (
  <div>
    <div className={styles["fx-block"]}>
      <div className={styles["toggle"]}>
        <div>
          <input type="checkbox" id="toggles" />
          <div data-unchecked="On" data-checked="Off"></div>
        </div>
      </div>
    </div>
  </div>
);

export default Toggle_matter;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_matter = () => (
         <div>
          <div className="fx-block">
	<div className="toggle">
		<div>
			<input type="checkbox" id="toggles" />
			<div data-unchecked="On" data-checked="Off">
			</div>
		</div>
	</div>
</div>
        </div>
        );

        export default Toggle_matter;
        
        
         */
}
