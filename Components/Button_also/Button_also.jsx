import React from "react";
import styles from "./Button_also.module.css";

const Button_also = () => (
  <div>
    <button>
      <span className={styles["text"]}>Button</span>
    </button>
  </div>
);

export default Button_also;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_also = () => (
         <div>
          <button>
  <span className="text">Button</span>
</button>
        </div>
        );

        export default Button_also;
        
        
         */
}
