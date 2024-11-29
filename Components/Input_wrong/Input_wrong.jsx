import React from "react";
import styles from "./Input_wrong.module.css";

const Input_wrong = () => (
  <div>
    <label for="myInput" className={styles["label"]}>
      <span className={styles["label-title"]}>My nice input</span>
      <input
        id="myInput"
        className={styles["input"]}
        name="text"
        placeholder="Type something..."
        type="text"
      />
    </label>
  </div>
);

export default Input_wrong;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_wrong = () => (
         <div>
          <label for="myInput" className="label">
  <span className="label-title">My nice input</span>
  <input id="myInput" className="input" name="text" placeholder="Type something..." type="text" />
</label>
        </div>
        );

        export default Input_wrong;
        
        
         */
}
