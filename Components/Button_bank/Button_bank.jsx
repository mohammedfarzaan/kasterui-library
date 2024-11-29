import React from "react";
import styles from "./Button_bank.module.css";

const Button_bank = () => (
  <div>
    <button className={styles["container"] + styles["moon-container"]}>
      <div className={styles["moon"]}>
        <div className={styles["mancha2"]}></div>
      </div>
      <div className={styles["moon-text"]}>To the Moon</div>
    </button>
  </div>
);

export default Button_bank;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_bank = () => (
         <div>
          <button className="container moon-container">
  <div className="moon">
    <div className="mancha2"></div>
    </div>
		 <div className="moon-text">To the Moon</div>
</button>
        </div>
        );

        export default Button_bank;
        
        
         */
}
