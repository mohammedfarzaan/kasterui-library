import React from "react";
import styles from "./Toggle_storm.module.css";

const Toggle_storm = () => (
  <div>
    <fieldset id="switch" className={styles["radio"]}>
      <input name="switch" id="on" type="radio" />
      <label for="on">ON</label>
      <input name="switch" id="off" type="radio" />
      <label for="off">OFF</label>
      <input checked="" name="switch" id="auto" type="radio" />
      <label for="auto">AUTO</label>
    </fieldset>
  </div>
);

export default Toggle_storm;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_storm = () => (
         <div>
          <fieldset id="switch" className="radio">
	<input name="switch" id="on" type="radio" />
	<label for="on">ON</label>
	<input name="switch" id="off" type="radio" />
	<label for="off">OFF</label>
	<input checked="" name="switch" id="auto" type="radio" />
	<label for="auto">AUTO</label>
</fieldset>
        </div>
        );

        export default Toggle_storm;
        
        
         */
}
