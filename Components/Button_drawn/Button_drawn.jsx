import React from "react";
import styles from "./Button_drawn.module.css";

const Button_drawn = () => (
  <div>
    <ul className={styles["ul"]}>
      <li className={styles["li"]}>
        <button className={styles["button"]}>
          <p className={styles["p"]}>Home</p>
        </button>
      </li>
      <li className={styles["li"]}>
        <button className={styles["button"]}>
          <p className={styles["p"]}>Store</p>
        </button>
      </li>
      <li className={styles["li"]}>
        <button className={styles["button"]}>
          <p className={styles["p"]}>Settings</p>
        </button>
      </li>
    </ul>
  </div>
);

export default Button_drawn;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_drawn = () => (
         <div>
          <ul className="ul">
  <li className="li">
    <button className="button"><p className="p">Home</p></button>
  </li>
  <li className="li">
    <button className="button"><p className="p">Store</p></button>
  </li>
  <li className="li">
    <button className="button"><p className="p">Settings</p></button>
  </li>
</ul>
        </div>
        );

        export default Button_drawn;
        
        
         */
}
