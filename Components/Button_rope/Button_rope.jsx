import React from "react";
import styles from "./Button_rope.module.css";

const Button_rope = () => (
  <div>
    <button className={styles["button"]}>Click Here</button>
  </div>
);

export default Button_rope;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_rope = () => (
         <div>
          <button className="button">Click Here</button>
        </div>
        );

        export default Button_rope;
        
        
         */
}
