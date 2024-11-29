import React from "react";
import styles from "./Radio_slip.module.css";

const Radio_slip = () => (
  <div>
    <label id="topleft" className={styles["container"]}>
      <input name="my-radio-button" type="radio" />
      <label id="tl">
        Top <br />
        Left
      </label>
      <div className={styles["selected"]}></div>
    </label>
    &nbsp;
    <label id="topright" className={styles["container"]}>
      <input name="my-radio-button" type="radio" />
      <label id="tr">
        Top
        <br />
        Right
      </label>
      <div className={styles["selected"]}></div>
    </label>
    <br />
    <br />
    <label id="bottomleft" className={styles["container"]}>
      <input name="my-radio-button" type="radio" />
      <label id="bl">
        Bottom <br />
        Left
      </label>
      <div className={styles["selected"]}></div>
    </label>
    &nbsp;
    <label id="bottomright" className={styles["container"]}>
      <input name="my-radio-button" type="radio" />
      <label id="br">
        Bottom <br />
        Right
      </label>
      <div className={styles["selected"]}></div>
    </label>
  </div>
);

export default Radio_slip;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_slip = () => (
         <div>
          <label id="topleft" className="container">
  <input name="my-radio-button" type="radio" />
  <label id="tl">Top <br />Left</label>
  <div className="selected"></div>
</label>
&nbsp;
<label id="topright" className="container">
  <input name="my-radio-button" type="radio" />
  <label id="tr">Top<br />Right</label>
  <div className="selected"></div>
</label>
<br />
<br />
<label id="bottomleft" className="container">
  <input name="my-radio-button" type="radio" />
  <label id="bl">Bottom <br />Left</label>
  <div className="selected"></div>
</label>
&nbsp;
<label id="bottomright" className="container">
  <input name="my-radio-button" type="radio" />
  <label id="br">Bottom <br />Right</label>
  <div className="selected"></div>
</label>
        </div>
        );

        export default Radio_slip;
        
        
         */
}
