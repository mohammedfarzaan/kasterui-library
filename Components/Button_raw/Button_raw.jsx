import React from "react";
import styles from "./Button_raw.module.css";

const Button_raw = () => (
  <div>
    <button>
      {" "}
      <span>Button</span>
    </button>
  </div>
);

export default Button_raw;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_raw = () => (
         <div>
          <button> <span>Button</span>
</button>
        </div>
        );

        export default Button_raw;
        
        
         */
}