import React from "react";
import styles from "./Input_time.module.css";

const Input_time = () => (
  <div>
    <div className={styles["form-control"]}>
      <input
        className={styles["input"] + styles["input-alt"]}
        placeholder="Type something intelligent"
        required=""
        type="text"
      />
      <span
        className={styles["input-border"] + styles["input-border-alt"]}
      ></span>
    </div>
  </div>
);

export default Input_time;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_time = () => (
         <div>
          <div className="form-control">
  <input className="input input-alt" placeholder="Type something intelligent" required="" type="text" />
  <span className="input-border input-border-alt"></span>
</div>
        </div>
        );

        export default Input_time;
        
        
         */
}
