import React from "react";
import styles from "./Button_way.module.css";

const Button_way = () => (
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

export default Button_way;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_way = () => (
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

        export default Button_way;
        
        
         */
}
