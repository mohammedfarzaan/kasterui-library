import React from "react";
import styles from "./Button_again.module.css";

const Button_again = () => (
  <div>
    <button>
      <span className={styles["text"]}>Button</span>
    </button>
  </div>
);

export default Button_again;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_again = () => (
         <div>
          <button>
  <span className="text">Button</span>
</button>
        </div>
        );

        export default Button_again;
        
        
         */
}
