import React from "react";
import styles from "./Toggle_iron.module.css";

const Toggle_iron = () => (
  <div>
    <input type="checkbox" className={styles["plus-minus"]} />
  </div>
);

export default Toggle_iron;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_iron = () => (
         <div>
          <input type="checkbox" className="plus-minus" />
        </div>
        );

        export default Toggle_iron;
        
        
         */
}
