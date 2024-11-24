import React from "react";
import styles from "./Button_moment.module.css";

const Button_moment = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["button-content"]}>Wavy Button</span>
    </button>
  </div>
);

export default Button_moment;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_moment = () => (
         <div>
          <button className="button">
  <span className="button-content">Wavy Button</span>
</button>
        </div>
        );

        export default Button_moment;
        
        
         */
}
