import React from "react";
import styles from "./Input_track.module.css";

const Input_track = () => (
  <div>
    <div className={styles["input"]}>
      <input
        className={styles["to-do-input"]}
        placeholder="Your Tasks Go Here..."
        name="text"
        type="text"
      />
      <div className={styles["todo-line"]}>&nbsp;</div>
    </div>
    <button className={styles["input"] + styles["button"]}>Add</button>
  </div>
);

export default Input_track;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_track = () => (
         <div>
          <div className="input">
  <input
    className="to-do-input"
    placeholder="Your Tasks Go Here..."
    name="text"
    type="text"
  />
  <div className="todo-line">&nbsp;</div>
</div>
<button className="input button">Add</button>
        </div>
        );

        export default Input_track;
        
        
         */
}
