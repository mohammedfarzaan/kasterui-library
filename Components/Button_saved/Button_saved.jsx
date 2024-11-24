import React from "react";
import styles from "./Button_saved.module.css";

const Button_saved = () => (
  <div>
    <button className={styles["ui-btn"]}>Delete</button>
  </div>
);

export default Button_saved;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_saved = () => (
         <div>
          <button className="ui-btn">Delete</button>
        </div>
        );

        export default Button_saved;
        
        
         */
}