import React from "react";
import styles from "./Input_hollow.module.css";

const Input_hollow = () => (
  <div>
    <div className={styles["input-container"]}>
      <input type="text" placeholder="Add Item" />
      <button className={styles["button"]}>Add</button>
    </div>
  </div>
);

export default Input_hollow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_hollow = () => (
         <div>
          <div className="input-container">
  <input type="text" placeholder="Add Item" />
  <button className="button">Add</button>
</div>
        </div>
        );

        export default Input_hollow;
        
        
         */
}
