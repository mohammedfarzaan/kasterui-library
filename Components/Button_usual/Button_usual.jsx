import React from "react";
import styles from "./Button_usual.module.css";

const Button_usual = () => (
  <div>
    <button className={styles["btn-57"]}>Button</button>
  </div>
);

export default Button_usual;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_usual = () => (
         <div>
          <button className="btn-57">Button</button>
        </div>
        );

        export default Button_usual;
        
        
         */
}
