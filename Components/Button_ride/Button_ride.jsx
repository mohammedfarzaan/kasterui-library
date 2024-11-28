import React from "react";
import styles from "./Button_ride.module.css";

const Button_ride = () => (
  <div>
    <button className={styles["btn1"]}>&gt; Send Message</button>
  </div>
);

export default Button_ride;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_ride = () => (
         <div>
          <button className="btn1">&gt; Send Message</button>
        </div>
        );

        export default Button_ride;
        
        
         */
}
