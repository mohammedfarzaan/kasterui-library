import React from "react";
import styles from "./Toggle_plates.module.css";

const Toggle_plates = () => (
  <div>
    <label>
      <input
        value="on"
        name="dummy"
        type="checkbox"
        className={styles["bubble"]}
      />
    </label>
  </div>
);

export default Toggle_plates;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_plates = () => (
         <div>
          <label><input value="on" name="dummy" type="checkbox" className="bubble" /></label>
        </div>
        );

        export default Toggle_plates;
        
        
         */
}
