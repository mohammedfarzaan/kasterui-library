import React from "react";
import styles from "./Radio_pound.module.css";

const Radio_pound = () => (
  <div>
    <div className={styles["box"]}>
      <div className={styles["radio-input"]}>
        <input name="challenge" value="Option 1" type="radio" id="1id" />
        <label for="1id">Never</label>
        <br />
        <input name="challenge" value="Option 2" type="radio" id="2id" />
        <label for="2id">Stop</label>
        <br />
        <input name="challenge" value="Option 3" type="radio" id="3id" />
        <label for="3id">Dreaming </label>
        <br />
      </div>
    </div>
  </div>
);

export default Radio_pound;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_pound = () => (
         <div>
          <div className="box">
  <div className="radio-input">
    <input name="challenge" value="Option 1" type="radio" id="1id" />
    <label for="1id">Never</label><br />
    <input name="challenge" value="Option 2" type="radio" id="2id" />
    <label for="2id">Stop</label><br />
    <input name="challenge" value="Option 3" type="radio" id="3id" />
    <label for="3id">Dreaming </label><br />
  </div>
</div>
        </div>
        );

        export default Radio_pound;
        
        
         */
}
