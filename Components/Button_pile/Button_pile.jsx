import React from "react";
import styles from "./Button_pile.module.css";

const Button_pile = () => (
  <div>
    <button className={styles["menu__icon"]}></button>
  </div>
);

export default Button_pile;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_pile = () => (
         <div>
          <button className="menu__icon">
</button>
        </div>
        );

        export default Button_pile;
        
        
         */
}
