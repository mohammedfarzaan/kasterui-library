import React from "react";
import styles from "./Button_almost.module.css";

const Button_almost = () => (
  <div>
    <button className={styles["primary-button"]}>Primary button</button>
  </div>
);

export default Button_almost;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_almost = () => (
         <div>
          <button className="primary-button">
  Primary button
</button>
        </div>
        );

        export default Button_almost;
        
        
         */
}
