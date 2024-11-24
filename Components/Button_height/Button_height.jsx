import React from "react";
import styles from "./Button_height.module.css";

const Button_height = () => (
  <div>
    <a className={styles["bck-grnd"]}>
      <span className={styles["style"]}></span>Hover me{" "}
    </a>
  </div>
);

export default Button_height;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_height = () => (
         <div>
          <a className="bck-grnd"><span className="style"></span>Hover me </a>
        </div>
        );

        export default Button_height;
        
        
         */
}
