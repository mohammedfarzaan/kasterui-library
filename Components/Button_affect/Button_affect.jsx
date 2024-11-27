import React from "react";
import styles from "./Button_affect.module.css";

const Button_affect = () => (
  <div>
    <button className={styles["btn-60"]}>
      <span>Button</span>
    </button>
  </div>
);

export default Button_affect;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_affect = () => (
         <div>
          <button className="btn-60"><span>Button</span></button>
        </div>
        );

        export default Button_affect;
        
        
         */
}
