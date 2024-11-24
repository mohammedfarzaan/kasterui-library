import React from "react";
import styles from "./Button_block.module.css";

const Button_block = () => (
  <div>
    <button className={styles["button"] + styles["font"]}>Hold Me</button>
  </div>
);

export default Button_block;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_block = () => (
         <div>
          <button className="button font">Hold Me</button>
        </div>
        );

        export default Button_block;
        
        
         */
}
