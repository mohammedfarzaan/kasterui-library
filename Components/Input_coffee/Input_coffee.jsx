import React from "react";
import styles from "./Input_coffee.module.css";

const Input_coffee = () => (
  <div>
    <div className={styles["input-wrapper"]}>
      <input
        type="text"
        placeholder="Type here..."
        name="text"
        className={styles["input"]}
      />
    </div>
  </div>
);

export default Input_coffee;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_coffee = () => (
         <div>
          <div className="input-wrapper">
  <input type="text" placeholder="Type here..." name="text" className="input" />
</div>
        </div>
        );

        export default Input_coffee;
        
        
         */
}
