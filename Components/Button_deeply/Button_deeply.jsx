import React from "react";
import styles from "./Button_deeply.module.css";

const Button_deeply = () => (
  <div>
    <button className={styles["learn-more"]}> Learn More</button>
  </div>
);

export default Button_deeply;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_deeply = () => (
         <div>
          <button className="learn-more"> Learn More
</button>
        </div>
        );

        export default Button_deeply;
        
        
         */
}
