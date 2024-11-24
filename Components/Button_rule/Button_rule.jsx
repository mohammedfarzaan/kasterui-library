import React from "react";
import styles from "./Button_rule.module.css";

const Button_rule = () => (
  <div>
    <div className={styles["body"]}>
      <button className={styles["btn"] + styles["btn-hover"]}>
        <span className={styles["btn-text"]}>Practice now</span>
      </button>
    </div>
  </div>
);

export default Button_rule;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_rule = () => (
         <div>
          <div className="body">
<button className="btn btn-hover">
  <span className="btn-text">Practice now</span>
</button>
</div>
        </div>
        );

        export default Button_rule;
        
        
         */
}
