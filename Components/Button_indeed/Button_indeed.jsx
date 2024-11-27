import React from "react";
import styles from "./Button_indeed.module.css";

const Button_indeed = () => (
  <div>
    <a href="#" className={styles["btn"]}>
      {" "}
      Click Me
    </a>
  </div>
);

export default Button_indeed;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_indeed = () => (
         <div>
          <a href="#" className="btn"> Click Me</a>
        </div>
        );

        export default Button_indeed;
        
        
         */
}
