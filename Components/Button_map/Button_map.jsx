import React from "react";
import styles from "./Button_map.module.css";

const Button_map = () => (
  <div>
    <a className={styles["btn-shine"]} href="https://check.so">
      Get early access
    </a>
  </div>
);

export default Button_map;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_map = () => (
         <div>
          <a className="btn-shine" href="https://check.so">Get early access</a>
        </div>
        );

        export default Button_map;
        
        
         */
}
