import React from "react";
import styles from "./Input_pocket.module.css";

const Input_pocket = () => (
  <div>
    <div className={styles["inputs"]}>
      <input
        type="text"
        name="text"
        className={styles["input"]}
        placeholder="Enter Text"
        required=""
      />
    </div>
  </div>
);

export default Input_pocket;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_pocket = () => (
         <div>
          <div className="inputs">
  <input type="text" name="text" className="input" placeholder="Enter Text" required="" />
</div>
        </div>
        );

        export default Input_pocket;
        
        
         */
}
