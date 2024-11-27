import React from "react";
import styles from "./Button_horn.module.css";

const Button_horn = () => (
  <div>
    <div className={styles["body"]}>
      <button className={styles["btn"] + styles["btn-hover"]}>
        <span className={styles["btn-text"]}>Practice now</span>
      </button>
    </div>
  </div>
);

export default Button_horn;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_horn = () => (
         <div>
          <div className="body">
<button className="btn btn-hover">
  <span className="btn-text">Practice now</span>
</button>
</div>
        </div>
        );

        export default Button_horn;
        
        
         */
}
