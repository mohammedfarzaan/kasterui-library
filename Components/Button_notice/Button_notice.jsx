import React from "react";
import styles from "./Button_notice.module.css";

const Button_notice = () => (
  <div>
    <button role="button" className={styles["button-name"]}>
      Button-name
    </button>
  </div>
);

export default Button_notice;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_notice = () => (
         <div>
          <button role="button" className="button-name">Button-name</button>
        </div>
        );

        export default Button_notice;
        
        
         */
}
