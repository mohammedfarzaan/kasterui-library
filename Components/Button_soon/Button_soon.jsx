import React from "react";
import styles from "./Button_soon.module.css";

const Button_soon = () => (
  <div>
    <div className={styles["main_div"]}>
      <button>Sign up</button>
    </div>
  </div>
);

export default Button_soon;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_soon = () => (
         <div>
          <div className="main_div">
  <button>Sign up</button>
</div>
        </div>
        );

        export default Button_soon;
        
        
         */
}
