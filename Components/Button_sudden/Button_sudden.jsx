import React from "react";
import styles from "./Button_sudden.module.css";

const Button_sudden = () => (
  <div>
    <button className={styles["btn"] + styles["btn--primary"]}>
      <span className={styles["btn-inner"]}>
        <span className={styles["btn-label"]}>Button</span>
      </span>
    </button>
  </div>
);

export default Button_sudden;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_sudden = () => (
         <div>
          <button className="btn btn--primary">

  <span className="btn-inner">
    <span className="btn-label">
      Button 
    </span>
  </span>
  
</button>
        </div>
        );

        export default Button_sudden;
        
        
         */
}
