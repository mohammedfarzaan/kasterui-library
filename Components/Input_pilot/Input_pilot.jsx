import React from "react";
import styles from "./Input_pilot.module.css";

const Input_pilot = () => (
  <div>
    <div className={styles["InputContainer"]}>
      <input
        placeholder="Search.."
        id="input"
        className={styles["input"]}
        name="text"
        type="text"
      />
    </div>
  </div>
);

export default Input_pilot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_pilot = () => (
         <div>
          <div className="InputContainer">
  <input placeholder="Search.." id="input" className="input" name="text" type="text" />
  
</div>
        </div>
        );

        export default Input_pilot;
        
        
         */
}
