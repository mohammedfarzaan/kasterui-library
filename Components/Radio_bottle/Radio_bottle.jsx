import React from "react";
import styles from "./Radio_bottle.module.css";

const Radio_bottle = () => (
  <div>
    <div className={styles["radio-input"]}>
      <input type="radio" id="value-1" name="value-radio" value="value-1" />
      <div className={styles["circle"]}></div>
      <input
        checked=""
        type="radio"
        id="value-2"
        name="value-radio"
        value="value-2"
      />
      <div className={styles["circle"]}></div>
      <input type="radio" id="value-3" name="value-radio" value="value-3" />
      <div className={styles["circle"]}></div>
    </div>
  </div>
);

export default Radio_bottle;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_bottle = () => (
         <div>
          <div className="radio-input">
 <input type="radio" id="value-1" name="value-radio" value="value-1" />
  <div className="circle">
   </div> 
 <input checked="" type="radio" id="value-2" name="value-radio" value="value-2" />
  <div className="circle">
  </div> 
 <input type="radio" id="value-3" name="value-radio" value="value-3" />
  <div className="circle">
  </div>
</div>
        </div>
        );

        export default Radio_bottle;
        
        
         */
}
