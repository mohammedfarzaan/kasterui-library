import React from "react";
import styles from "./Button_fur.module.css";

const Button_fur = () => (
  <div>
    <ul>
      <li style="--i:#a955ff;--j:#ea51ff;">
        <span className={styles["icon"]}>🏠</span>
        <span className={styles["title"]}>Home</span>
      </li>
    </ul>
  </div>
);

export default Button_fur;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_fur = () => (
         <div>
          <ul>
  <li style="--i:#a955ff;--j:#ea51ff;">
    <span className="icon">🏠</span>
    <span className="title">Home</span>
  </li>
</ul>
        </div>
        );

        export default Button_fur;
        
        
         */
}
