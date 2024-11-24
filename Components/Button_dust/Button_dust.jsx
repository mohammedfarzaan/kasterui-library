import React from "react";
import styles from "./Button_dust.module.css";

const Button_dust = () => (
  <div>
    <button className={styles["btn-shape"]}>
      <span className={styles["title"]}>hover me</span>
    </button>
  </div>
);

export default Button_dust;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_dust = () => (
         <div>
          <button className="btn-shape">
    <span className="title">
      hover me
    </span>
</button>
        </div>
        );

        export default Button_dust;
        
        
         */
}
