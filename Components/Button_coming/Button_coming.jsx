import React from "react";
import styles from "./Button_coming.module.css";

const Button_coming = () => (
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

export default Button_coming;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_coming = () => (
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

        export default Button_coming;
        
        
         */
}
