import React from "react";
import styles from "./Radio_usual.module.css";

const Radio_usual = () => (
  <div>
    <label>
      <input
        checked=""
        name="example"
        className={
          styles["option-input"] + styles["radio"] + styles["circlegg"]
        }
        type="radio"
      />
    </label>
    <label>
      <input
        name="example"
        className={
          styles["option-input"] + styles["radio"] + styles["circlegg"]
        }
        type="radio"
      />
    </label>
    <label>
      <input
        name="example"
        className={
          styles["option-input"] + styles["radio"] + styles["circlegg"]
        }
        type="radio"
      />
    </label>
  </div>
);

export default Radio_usual;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_usual = () => (
         <div>
          <label>
    <input checked="" name="example" className="option-input radio circlegg" type="radio" />
  </label>
  <label>
    <input name="example" className="option-input radio circlegg" type="radio" />
  </label>
  <label>
    <input name="example" className="option-input radio circlegg" type="radio" />
  </label>
        </div>
        );

        export default Radio_usual;
        
        
         */
}
