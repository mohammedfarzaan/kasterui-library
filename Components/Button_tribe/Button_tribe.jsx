import React from "react";
import styles from "./Button_tribe.module.css";

const Button_tribe = () => (
  <div>
    <button className={styles["btn-23"]}>
      <span className={styles["text"]}>Button</span>
      <span aria-hidden="" className={styles["marquee"]}>
        Button
      </span>
    </button>
  </div>
);

export default Button_tribe;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_tribe = () => (
         <div>
          <button className="btn-23">
  <span className="text">Button</span>
  <span aria-hidden="" className="marquee">Button</span>
</button>
        </div>
        );

        export default Button_tribe;
        
        
         */
}
