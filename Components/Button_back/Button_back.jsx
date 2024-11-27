import React from "react";
import styles from "./Button_back.module.css";

const Button_back = () => (
  <div>
    <ul>
      <li style="--i:#a955ff;--j:#ea51ff;">
        <span className={styles["icon"]}>🏠</span>
        <span className={styles["title"]}>Home</span>
      </li>
    </ul>
  </div>
);

export default Button_back;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_back = () => (
         <div>
          <ul>
  <li style="--i:#a955ff;--j:#ea51ff;">
    <span className="icon">🏠</span>
    <span className="title">Home</span>
  </li>
</ul>
        </div>
        );

        export default Button_back;
        
        
         */
}
