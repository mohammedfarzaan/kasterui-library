import React from "react";
import styles from "./Button_given.module.css";

const Button_given = () => (
  <div>
    <button className={styles["btn"] + styles["btn-1"]}>Hover Me!</button>
  </div>
);

export default Button_given;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_given = () => (
         <div>
          <button className="btn btn-1">Hover Me!</button>
        </div>
        );

        export default Button_given;
        
        
         */
}
