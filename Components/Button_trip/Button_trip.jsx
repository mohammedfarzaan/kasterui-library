import React from "react";
import styles from "./Button_trip.module.css";

const Button_trip = () => (
  <div>
    <button className={styles["Btn"]}>
      <p className={styles["text"]}>Button</p>
      <span className={styles["BG"]}></span>
    </button>
  </div>
);

export default Button_trip;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_trip = () => (
         <div>
          <button className="Btn">
  <p className="text">Button</p>
  <span className="BG"></span>
</button>
        </div>
        );

        export default Button_trip;
        
        
         */
}
