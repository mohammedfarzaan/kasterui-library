import React from "react";
import styles from "./Button_many.module.css";

const Button_many = () => (
  <div>
    <a>
      <div className={styles["buuton"]}>HOVER ME</div>
      <div className={styles["back"]}></div>
    </a>
  </div>
);

export default Button_many;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_many = () => (
         <div>
          <a>
  <div className="buuton">HOVER ME</div>
  <div className="back"></div>
</a>
        </div>
        );

        export default Button_many;
        
        
         */
}