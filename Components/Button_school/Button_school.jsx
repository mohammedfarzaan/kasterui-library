import React from "react";
import styles from "./Button_school.module.css";

const Button_school = () => (
  <div>
    <button className={styles["container"] + styles["moon-container"]}>
      <div className={styles["moon"]}>
        <div className={styles["mancha2"]}></div>
      </div>
      <div className={styles["moon-text"]}>To the Moon</div>
    </button>
  </div>
);

export default Button_school;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_school = () => (
         <div>
          <button className="container moon-container">
  <div className="moon">
    <div className="mancha2"></div>
    </div>
		 <div className="moon-text">To the Moon</div>
</button>
        </div>
        );

        export default Button_school;
        
        
         */
}
