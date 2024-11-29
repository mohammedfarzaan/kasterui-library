import React from "react";
import styles from "./Input_atom.module.css";

const Input_atom = () => (
  <div>
    <div className={styles["formContainer"]}>
      <input placeholder="example@email.com" type="text" />
      <label>Email</label>
    </div>
  </div>
);

export default Input_atom;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_atom = () => (
         <div>
          <div className="formContainer">
  <input placeholder="example@email.com" type="text" />
  <label>Email</label>
</div>
        </div>
        );

        export default Input_atom;
        
        
         */
}
