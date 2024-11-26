import React from "react";
import styles from "./Button_not.module.css";

const Button_not = () => (
  <div>
    <button className={styles["btn"]}>
      <span className={styles["text"]}>Button</span>
    </button>
  </div>
);

export default Button_not;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_not = () => (
         <div>
          <button className="btn">
  <span className="text">Button</span>
</button>
        </div>
        );

        export default Button_not;
        
        
         */
}
