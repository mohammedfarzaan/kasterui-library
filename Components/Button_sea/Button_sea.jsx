import React from "react";
import styles from "./Button_sea.module.css";

const Button_sea = () => (
  <div>
    <button className={styles["custom-btn"] + styles["btn-1"]}>
      Read More
    </button>
  </div>
);

export default Button_sea;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_sea = () => (
         <div>
          <button className="custom-btn btn-1">Read More</button>
        </div>
        );

        export default Button_sea;
        
        
         */
}