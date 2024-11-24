import React from "react";
import styles from "./Button_catch.module.css";

const Button_catch = () => (
  <div>
    <button className={styles["button"]}>Submit</button>
  </div>
);

export default Button_catch;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_catch = () => (
         <div>
          <button className="button">Submit</button>
        </div>
        );

        export default Button_catch;
        
        
         */
}