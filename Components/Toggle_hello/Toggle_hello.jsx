import React from "react";
import styles from "./Toggle_hello.module.css";

const Toggle_hello = () => (
  <div>
    <input
      value="is_hot"
      name="temperature"
      type="checkbox"
      className={styles["ch"]}
    />
  </div>
);

export default Toggle_hello;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_hello = () => (
         <div>
          <input value="is_hot" name="temperature" type="checkbox" className="ch" />
        </div>
        );

        export default Toggle_hello;
        
        
         */
}
