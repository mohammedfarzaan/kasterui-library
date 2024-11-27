import React from "react";
import styles from "./Button_rice.module.css";

const Button_rice = () => (
  <div>
    <div className={styles["buttons"]}>
      <button className={styles["btn"]}>
        <span></span>
        <p data-start="good luck!" data-text="start!" data-title="new game"></p>
      </button>
    </div>
  </div>
);

export default Button_rice;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_rice = () => (
         <div>
          <div className="buttons">
   <button className="btn"><span></span><p data-start="good luck!" data-text="start!" data-title="new game"></p></button>
</div>
        </div>
        );

        export default Button_rice;
        
        
         */
}
