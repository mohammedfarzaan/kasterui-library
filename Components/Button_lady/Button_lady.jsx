import React from "react";
import styles from "./Button_lady.module.css";

const Button_lady = () => (
  <div>
    <button className={styles["menu__button"]}>
      <span>Hover me!</span>
    </button>
  </div>
);

export default Button_lady;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_lady = () => (
         <div>
          <button className="menu__button">
  <span>Hover me!</span>
</button>
        </div>
        );

        export default Button_lady;
        
        
         */
}
