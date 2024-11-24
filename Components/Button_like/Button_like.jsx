import React from "react";
import styles from "./Button_like.module.css";

const Button_like = () => (
  <div>
    <button className={styles["button"]}>
      <div>Hover</div>
    </button>
  </div>
);

export default Button_like;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_like = () => (
         <div>
          <button className="button">
  <div>Hover</div>
</button>
        </div>
        );

        export default Button_like;
        
        
         */
}
