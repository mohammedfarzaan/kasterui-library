import React from "react";
import styles from "./Button_cabin.module.css";

const Button_cabin = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["btn"]}>
        <a href="#">Read more</a>
      </div>
    </div>
  </div>
);

export default Button_cabin;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_cabin = () => (
         <div>
          <div className="container">
		<div className="btn"><a href="#">Read more</a></div>
	
	</div>
        </div>
        );

        export default Button_cabin;
        
        
         */
}
