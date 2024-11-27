import React from "react";
import styles from "./Button_rich.module.css";

const Button_rich = () => (
  <div>
    <span
      data-active-content="🤨"
      data-hover-content="😑"
      data-content="😐"
      className={styles["💀"]}
    ></span>
  </div>
);

export default Button_rich;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_rich = () => (
         <div>
          <span
  data-active-content="🤨"
  data-hover-content="😑"
  data-content="😐"
  className="💀"
></span>
        </div>
        );

        export default Button_rich;
        
        
         */
}
