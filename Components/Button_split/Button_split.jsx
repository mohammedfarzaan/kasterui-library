import React from "react";
import styles from "./Button_split.module.css";

const Button_split = () => (
  <div>
    <button className={styles["boton-elegante"]}>Explorar</button>
  </div>
);

export default Button_split;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_split = () => (
         <div>
          <button className="boton-elegante">Explorar</button>
        </div>
        );

        export default Button_split;
        
        
         */
}
