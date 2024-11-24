import React from "react";
import styles from "./Button_having.module.css";

const Button_having = () => (
  <div>
    <button>
      Sign up
      <div className={styles["arrow-wrapper"]}>
        <div className={styles["arrow"]}></div>
      </div>
    </button>
  </div>
);

export default Button_having;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_having = () => (
         <div>
          <button>
    Sign up
    <div className="arrow-wrapper">
        <div className="arrow"></div>

    </div>
</button>
        </div>
        );

        export default Button_having;
        
        
         */
}
