import React from "react";
import styles from "./Toggle_plate.module.css";

const Toggle_plate = () => (
  <div>
    <input type="checkbox" className={styles["plus-minus"]} />
  </div>
);

export default Toggle_plate;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_plate = () => (
         <div>
          <input type="checkbox" className="plus-minus" />
        </div>
        );

        export default Toggle_plate;
        
        
         */
}