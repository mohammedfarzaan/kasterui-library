import React from "react";
import styles from "./Button_log.module.css";

const Button_log = () => (
  <div>
    <button>
      {" "}
      <span className={styles["text"]}>Button</span>
      <span className={styles["blob"]}></span>
      <span className={styles["blob"]}></span>
      <span className={styles["blob"]}></span>
      <span className={styles["blob"]}></span>
    </button>
  </div>
);

export default Button_log;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_log = () => (
         <div>
          <button> <span className="text">Button</span>
  <span className="blob"></span>
  <span className="blob"></span>
  <span className="blob"></span>
  <span className="blob"></span>
</button>
        </div>
        );

        export default Button_log;
        
        
         */
}
