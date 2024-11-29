import React from "react";
import styles from "./Button_where.module.css";

const Button_where = () => (
  <div>
    <button type="button" className={styles["glow-on-hover"]}>
      HOVER AND CLICK ME!
    </button>
  </div>
);

export default Button_where;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_where = () => (
         <div>
          <button type="button" className="glow-on-hover">
  HOVER AND CLICK ME!
</button>
        </div>
        );

        export default Button_where;
        
        
         */
}
