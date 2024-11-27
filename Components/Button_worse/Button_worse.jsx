import React from "react";
import styles from "./Button_worse.module.css";

const Button_worse = () => (
  <div>
    <button className={styles["btn-donate"]}>Donate now</button>
  </div>
);

export default Button_worse;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_worse = () => (
         <div>
          <button className="btn-donate">
    Donate now
</button>
        </div>
        );

        export default Button_worse;
        
        
         */
}
