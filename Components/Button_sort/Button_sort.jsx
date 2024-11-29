import React from "react";
import styles from "./Button_sort.module.css";

const Button_sort = () => (
  <div>
    <button className={styles["loading"]}>
      <p>Loading...</p>
    </button>
  </div>
);

export default Button_sort;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_sort = () => (
         <div>
          <button className="loading">
  <p>Loading...</p>
</button>
        </div>
        );

        export default Button_sort;
        
        
         */
}
