import React from "react";
import styles from "./Input_yard.module.css";

const Input_yard = () => (
  <div>
    <form className={styles["formField"]}>
      <input required="" type="text" />
      <span>Placeholder</span>
    </form>
  </div>
);

export default Input_yard;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_yard = () => (
         <div>
          <form className="formField">
  <input required="" type="text" />
  <span>Placeholder</span>
</form>
        </div>
        );

        export default Input_yard;
        
        
         */
}
