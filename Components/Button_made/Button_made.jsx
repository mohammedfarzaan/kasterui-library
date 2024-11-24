import React from "react";
import styles from "./Button_made.module.css";

const Button_made = () => (
  <div>
    <button className={styles["custom-btn"] + styles["btn-2"]}>
      Read More
    </button>
  </div>
);

export default Button_made;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_made = () => (
         <div>
          <button className="custom-btn btn-2">Read More</button>
        </div>
        );

        export default Button_made;
        
        
         */
}
