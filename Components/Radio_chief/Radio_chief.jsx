import React from "react";
import styles from "./Radio_chief.module.css";

const Radio_chief = () => (
  <div>
    <fieldset>
      <legend>Frameworks</legend>

      <div className={styles["button-group"]}>
        <input type="radio" id="svelt" name="frameworks" checked="" />
        <label for="svelt">Svelt</label>
      </div>

      <div className={styles["button-group"]}>
        <input type="radio" id="react" name="frameworks" />
        <label for="react">React</label>
      </div>

      <div className={styles["button-group"]}>
        <input type="radio" id="vue" name="frameworks" />
        <label for="vue">Vue</label>
      </div>
    </fieldset>
  </div>
);

export default Radio_chief;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_chief = () => (
         <div>
          <fieldset>
  <legend>Frameworks</legend>

  <div className="button-group">
    <input type="radio" id="svelt" name="frameworks" checked="" />
    <label for="svelt">Svelt</label>
  </div>

  <div className="button-group">
    <input type="radio" id="react" name="frameworks" />
    <label for="react">React</label>
  </div>

  <div className="button-group">
    <input type="radio" id="vue" name="frameworks" />
    <label for="vue">Vue</label>
  </div>
</fieldset>
        </div>
        );

        export default Radio_chief;
        
        
         */
}
