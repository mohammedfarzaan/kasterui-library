import React from "react";
import styles from "./Input_tune.module.css";

const Input_tune = () => (
  <div>
    <form className={styles["formField"]}>
      <input required="" type="text" />
      <span>Placeholder</span>
    </form>
  </div>
);

export default Input_tune;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_tune = () => (
         <div>
          <form className="formField">
  <input required="" type="text" />
  <span>Placeholder</span>
</form>
        </div>
        );

        export default Input_tune;
        
        
         */
}
