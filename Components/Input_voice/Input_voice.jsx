import React from "react";
import styles from "./Input_voice.module.css";

const Input_voice = () => (
  <div>
    <label className={styles["wrapper"]}>
      <input
        type="text"
        placeholder="Input label"
        name="text"
        className={styles["input"]}
      />
      <span className={styles["placeholder"]}>Input label</span>
    </label>
  </div>
);

export default Input_voice;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_voice = () => (
         <div>
          <label className="wrapper">
  <input type="text" placeholder="Input label" name="text" className="input" />
  <span className="placeholder">Input label</span>
</label>
        </div>
        );

        export default Input_voice;
        
        
         */
}
