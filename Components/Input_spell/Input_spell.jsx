import React from "react";
import styles from "./Input_spell.module.css";

const Input_spell = () => (
  <div>
    <input
      placeholder="Username"
      type="text"
      className={styles["input"]}
      required=""
    />
  </div>
);

export default Input_spell;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_spell = () => (
         <div>
          <input placeholder="Username" type="text" className="input" required="" />
        </div>
        );

        export default Input_spell;
        
        
         */
}
