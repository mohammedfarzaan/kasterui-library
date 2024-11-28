import React from "react";
import styles from "./Input_mother.module.css";

const Input_mother = () => (
  <div>
    <div className={styles["containerInput"]}>
      <input placeholder="Type for validate" type="text" />
    </div>
  </div>
);

export default Input_mother;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_mother = () => (
         <div>
          <div className="containerInput">
    <input placeholder="Type for validate" type="text" />
</div>
        </div>
        );

        export default Input_mother;
        
        
         */
}
