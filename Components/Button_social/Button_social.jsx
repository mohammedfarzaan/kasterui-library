import React from "react";
import styles from "./Button_social.module.css";

const Button_social = () => (
  <div>
    <button className={styles["bin"]}>🗑</button>
    <div className={styles["div"]}>
      <small>
        <i></i>
      </small>
    </div>
  </div>
);

export default Button_social;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_social = () => (
         <div>
          <button className="bin">🗑</button>
<div className="div">
  <small>
    <i></i>
  </small>
</div>
        </div>
        );

        export default Button_social;
        
        
         */
}
