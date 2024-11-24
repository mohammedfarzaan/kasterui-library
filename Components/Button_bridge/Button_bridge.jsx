import React from "react";
import styles from "./Button_bridge.module.css";

const Button_bridge = () => (
  <div>
    <button>
      <p>Submit</p>
    </button>
  </div>
);

export default Button_bridge;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_bridge = () => (
         <div>
          <button>
  <p>Submit</p>
</button>
        </div>
        );

        export default Button_bridge;
        
        
         */
}
