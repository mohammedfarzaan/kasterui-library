import React from "react";
import styles from "./Card_vowel.module.css";

const Card_vowel = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["loader"]} style="--clr:#01e100;--i:1;"></div>
      <div className={styles["loader"]} style="--clr:#f50076;--i:2;"></div>
      <div className={styles["loader"]} style="--clr:#00e6fd;--i:3;"></div>
    </div>
  </div>
);

export default Card_vowel;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_vowel = () => (
         <div>
          <div className="container">
  <div className="loader" style="--clr:#01e100;--i:1;"></div>
  <div className="loader" style="--clr:#f50076;--i:2;"></div>
  <div className="loader" style="--clr:#00e6fd;--i:3;"></div>
</div>
        </div>
        );

        export default Card_vowel;
        
        
         */
}
