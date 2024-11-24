import React from "react";
import styles from "./Button_equal.module.css";

const Button_equal = () => (
  <div>
    <div className={styles["frame"]}>
      <div className={styles["center"]}>
        <button>Hover me</button>
      </div>
    </div>
  </div>
);

export default Button_equal;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_equal = () => (
         <div>
          <div className="frame">
  <div className="center">
		<button>Hover me</button>
  </div>
</div>
        </div>
        );

        export default Button_equal;
        
        
         */
}