import React from "react";
import styles from "./Button_pilot.module.css";

const Button_pilot = () => (
  <div>
    <button>
      <div>
        <span>
          <p>Hover Me</p>
          <p>:)</p>
        </span>
      </div>
      <div>
        <span>
          <p>Thanks</p>
          <p>:D</p>
        </span>
      </div>
    </button>
  </div>
);

export default Button_pilot;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_pilot = () => (
         <div>
          <button>
  <div>
    <span>
      <p>Hover Me</p><p>:)</p>
    </span>
  </div>
  <div>
    <span>
      <p>Thanks</p><p>:D</p>
    </span>
  </div>
</button>
        </div>
        );

        export default Button_pilot;
        
        
         */
}
