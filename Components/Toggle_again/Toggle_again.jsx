import React from "react";
import styles from "./Toggle_again.module.css";

const Toggle_again = () => (
  <div>
    <div className={styles["love"]}>
      <input id="switch" type="checkbox" />
      <label className={styles["love-heart"]} for="switch">
        <i className={styles["left"]}></i>
        <i className={styles["right"]}></i>
        <i className={styles["bottom"]}></i>
        <div className={styles["round"]}></div>
      </label>
    </div>
  </div>
);

export default Toggle_again;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_again = () => (
         <div>
          <div className="love">
  <input id="switch" type="checkbox" />
  <label className="love-heart" for="switch">
    <i className="left"></i>
    <i className="right"></i>
    <i className="bottom"></i>
    <div className="round"></div>
  </label>
</div>
        </div>
        );

        export default Toggle_again;
        
        
         */
}
