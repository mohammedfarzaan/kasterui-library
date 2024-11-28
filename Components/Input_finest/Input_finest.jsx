import React from "react";
import styles from "./Input_finest.module.css";

const Input_finest = () => (
  <div>
    <div className={styles["search"]}>
      <input placeholder="Search..." type="text" />
      <button type="submit">Go</button>
    </div>
  </div>
);

export default Input_finest;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_finest = () => (
         <div>
          <div className="search">
        <input placeholder="Search..." type="text" />
        <button type="submit">Go</button>
      </div>
        </div>
        );

        export default Input_finest;
        
        
         */
}
