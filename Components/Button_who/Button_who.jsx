import React from "react";
import styles from "./Button_who.module.css";

const Button_who = () => (
  <div>
    <div className={styles["wrapper"]}>
      <button> Button</button>
    </div>
  </div>
);

export default Button_who;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_who = () => (
         <div>
          <div className="wrapper">
  <button> Button
  </button>
</div>
        </div>
        );

        export default Button_who;
        
        
         */
}
