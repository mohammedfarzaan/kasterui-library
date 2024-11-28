import React from "react";
import styles from "./Toggle_hall.module.css";

const Toggle_hall = () => (
  <div>
    <label className={styles["container"]}>
      <input id="check" type="checkbox" />
      <span></span>

      <label for="check" className={styles["shadow"]}></label>
    </label>
  </div>
);

export default Toggle_hall;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_hall = () => (
         <div>
          <label className="container">

    <input id="check" type="checkbox" />
    <span></span>

    <label for="check" className="shadow"></label>
</label>
        </div>
        );

        export default Toggle_hall;
        
        
         */
}
