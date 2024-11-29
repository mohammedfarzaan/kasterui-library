import React from "react";
import styles from "./Button_manner.module.css";

const Button_manner = () => (
  <div>
    <button className={styles["button"]}>
      <p className={styles["submit"]}>submit</p>
    </button>
  </div>
);

export default Button_manner;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_manner = () => (
         <div>
          <button className="button">
<p className="submit">submit</p>

</button>
        </div>
        );

        export default Button_manner;
        
        
         */
}
