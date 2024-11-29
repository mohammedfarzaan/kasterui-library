import React from "react";
import styles from "./Toggle_pair.module.css";

const Toggle_pair = () => (
  <div>
    <div className={styles["onoffswitch"]}>
      <input
        checked=""
        id="myonoffswitch"
        className={styles["onoffswitch-checkbox"]}
        name="onoffswitch"
        type="checkbox"
      />
      <label for="myonoffswitch" className={styles["onoffswitch-label"]}>
        <div className={styles["onoffswitch-inner"]}></div>
        <div className={styles["onoffswitch-switch"]}></div>
      </label>
    </div>
  </div>
);

export default Toggle_pair;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_pair = () => (
         <div>
          <div className="onoffswitch">
  <input
    checked=""
    id="myonoffswitch"
    className="onoffswitch-checkbox"
    name="onoffswitch"
    type="checkbox"
  />
  <label for="myonoffswitch" className="onoffswitch-label">
    <div className="onoffswitch-inner"></div>
    <div className="onoffswitch-switch"></div>
  </label>
</div>
        </div>
        );

        export default Toggle_pair;
        
        
         */
}
