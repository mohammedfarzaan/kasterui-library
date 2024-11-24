import React from "react";
import styles from "./Button_plus.module.css";

const Button_plus = () => (
  <div>
    <button className={styles["Btn"]}>Jelly Button</button>
  </div>
);

export default Button_plus;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_plus = () => (
         <div>
          <button className="Btn">
  Jelly Button
</button>
        </div>
        );

        export default Button_plus;
        
        
         */
}
