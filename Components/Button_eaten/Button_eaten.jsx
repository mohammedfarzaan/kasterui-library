import React from "react";
import styles from "./Button_eaten.module.css";

const Button_eaten = () => (
  <div>
    <button className={styles["btn"]}> Shop now</button>
  </div>
);

export default Button_eaten;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_eaten = () => (
         <div>
          <button className="btn"> Shop now
</button>
        </div>
        );

        export default Button_eaten;
        
        
         */
}
