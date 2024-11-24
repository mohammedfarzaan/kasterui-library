import React from "react";
import styles from "./Button_member.module.css";

const Button_member = () => (
  <div>
    <button className={styles["shadow__btn"]}>uiverse</button>
  </div>
);

export default Button_member;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_member = () => (
         <div>
          <button className="shadow__btn">
    uiverse
</button>
        </div>
        );

        export default Button_member;
        
        
         */
}