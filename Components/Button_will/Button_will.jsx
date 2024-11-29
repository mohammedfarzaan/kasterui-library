import React from "react";
import styles from "./Button_will.module.css";

const Button_will = () => (
  <div>
    <button className={styles["bt"]} id="bt">
      <span className={styles["msg"]} id="msg"></span>
      SEND
    </button>
  </div>
);

export default Button_will;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_will = () => (
         <div>
          <button className="bt" id="bt">
    <span className="msg" id="msg"></span>
    SEND
</button>
        </div>
        );

        export default Button_will;
        
        
         */
}
