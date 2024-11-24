import React from "react";
import styles from "./Button_title.module.css";

const Button_title = () => (
  <div>
    <button>
      <div className={styles["arrow-up"]}></div>
    </button>
  </div>
);

export default Button_title;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_title = () => (
         <div>
          <button>
    <div className="arrow-up"></div>
</button>
        </div>
        );

        export default Button_title;
        
        
         */
}
