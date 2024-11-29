import React from "react";
import styles from "./Input_tired.module.css";

const Input_tired = () => (
  <div>
    <div className={styles["coolinput"]}>
      <label for="input" className={styles["text"]}>
        Name:
      </label>
      <input
        type="text"
        placeholder="Write here..."
        name="input"
        className={styles["input"]}
      />
    </div>
  </div>
);

export default Input_tired;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_tired = () => (
         <div>
          <div className="coolinput">
    <label for="input" className="text">Name:</label>
    <input type="text" placeholder="Write here..." name="input" className="input" />
</div>
        </div>
        );

        export default Input_tired;
        
        
         */
}
