import React from "react";
import styles from "./Button_friend.module.css";

const Button_friend = () => (
  <div>
    <button className={styles["button"]}>Buton</button>
  </div>
);

export default Button_friend;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_friend = () => (
         <div>
          <button className="button">Buton</button>
        </div>
        );

        export default Button_friend;
        
        
         */
}
