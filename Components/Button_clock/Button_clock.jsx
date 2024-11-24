import React from "react";
import styles from "./Button_clock.module.css";

const Button_clock = () => (
  <div>
    <div className={styles["installer"]}>
      <label for="progressLinux">
        <input id="progressLinux" type="radio" />
        <span></span>
      </label>
    </div>
  </div>
);

export default Button_clock;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_clock = () => (
         <div>
          <div className="installer">
	<label for="progressLinux"><input id="progressLinux" type="radio" /><span></span></label>
</div>
        </div>
        );

        export default Button_clock;
        
        
         */
}
