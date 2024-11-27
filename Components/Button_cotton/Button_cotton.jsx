import React from "react";
import styles from "./Button_cotton.module.css";

const Button_cotton = () => (
  <div>
    <button>
      <span className={styles["button_top"]}> Button</span>
    </button>
  </div>
);

export default Button_cotton;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_cotton = () => (
         <div>
          <button>
  <span className="button_top"> Button
  </span>
</button>
        </div>
        );

        export default Button_cotton;
        
        
         */
}
