import React from "react";
import styles from "./Button_length.module.css";

const Button_length = () => (
  <div>
    <div className={styles["main_div"]}>
      <button>Sign up</button>
    </div>
  </div>
);

export default Button_length;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_length = () => (
         <div>
          <div className="main_div">
  <button>Sign up</button>
</div>
        </div>
        );

        export default Button_length;
        
        
         */
}
