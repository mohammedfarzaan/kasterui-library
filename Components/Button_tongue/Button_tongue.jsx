import React from "react";
import styles from "./Button_tongue.module.css";

const Button_tongue = () => (
  <div>
    <button>
      <div>Space</div>
      <div className={styles["liquid"]}></div>
    </button>
  </div>
);

export default Button_tongue;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_tongue = () => (
         <div>
          <button>
    <div>Space</div>
    <div className="liquid"></div>
</button>
        </div>
        );

        export default Button_tongue;
        
        
         */
}
