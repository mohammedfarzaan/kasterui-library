import React from "react";
import styles from "./Input_boy.module.css";

const Input_boy = () => (
  <div>
    <div className={styles["input-wrapper"]}>
      <input
        className={styles["input-box"]}
        type="text"
        placeholder="Enter your text"
      />
      <span className={styles["underline"]}></span>
    </div>
  </div>
);

export default Input_boy;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_boy = () => (
         <div>
          <div className="input-wrapper">
  <input className="input-box" type="text" placeholder="Enter your text" />
  <span className="underline"></span>
</div>
        </div>
        );

        export default Input_boy;
        
        
         */
}
