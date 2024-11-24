import React from "react";
import styles from "./Button_purple.module.css";

const Button_purple = () => (
  <div>
    <button>
      <div className={styles["state"]} id="moon">
        Send
      </div>
      <div className={styles["state"]} id="sun">
        Send
      </div>
      <span className={styles["lightRotation"]}></span>
      <span className={styles["lightRotation2"]}></span>
      <span className={styles["lightRotation3"]}></span>
      <span className={styles["lightRotation4"]}></span>
    </button>
  </div>
);

export default Button_purple;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_purple = () => (
         <div>
          <button>

<div className="state" id="moon">Send</div>
<div className="state" id="sun">Send</div>
<span className="lightRotation"></span>
<span className="lightRotation2"></span>
<span className="lightRotation3"></span>
<span className="lightRotation4"></span>
</button>
        </div>
        );

        export default Button_purple;
        
        
         */
}
