import React from "react";
import styles from "./Button_kids.module.css";

const Button_kids = () => (
  <div>
    <button className={styles["bn"]}>Hover!</button>
  </div>
);

export default Button_kids;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_kids = () => (
         <div>
          <button className="bn">Hover!</button>
        </div>
        );

        export default Button_kids;
        
        
         */
}
