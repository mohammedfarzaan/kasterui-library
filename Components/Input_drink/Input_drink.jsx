import React from "react";
import styles from "./Input_drink.module.css";

const Input_drink = () => (
  <div>
    <div className={styles["inputBox"]}>
      <input placeholder="Write here..." type="text" required="" />
      <span>First name :</span>
    </div>
  </div>
);

export default Input_drink;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_drink = () => (
         <div>
          <div className="inputBox">
  <input placeholder="Write here..." type="text" required="" />
  <span>First name :</span>
</div>
        </div>
        );

        export default Input_drink;
        
        
         */
}
