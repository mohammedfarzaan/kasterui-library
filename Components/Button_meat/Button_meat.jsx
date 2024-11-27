import React from "react";
import styles from "./Button_meat.module.css";

const Button_meat = () => (
  <div>
    <div className={styles["frame"]}>
      <div className={styles["center"]}>
        <button>Hover me</button>
      </div>
    </div>
  </div>
);

export default Button_meat;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_meat = () => (
         <div>
          <div className="frame">
  <div className="center">
		<button>Hover me</button>
  </div>
</div>
        </div>
        );

        export default Button_meat;
        
        
         */
}
