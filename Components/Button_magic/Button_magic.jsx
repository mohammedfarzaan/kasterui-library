import React from "react";
import styles from "./Button_magic.module.css";

const Button_magic = () => (
  <div>
    <button className={styles["button"]}> Button</button>
  </div>
);

export default Button_magic;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_magic = () => (
         <div>
          <button className="button"> Button
</button>
        </div>
        );

        export default Button_magic;
        
        
         */
}
