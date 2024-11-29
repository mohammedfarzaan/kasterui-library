import React from "react";
import styles from "./Radio_image.module.css";

const Radio_image = () => (
  <div>
    <label className={styles["container"]} id="left">
      <input type="radio" name="my-radio-button" />
      <div className={styles["selected"]} id="leftradio"></div>
    </label>
    <label className={styles["container"]} id="middle">
      <input type="radio" name="my-radio-button" />
      <div className={styles["selected"]} id="middleradio"></div>
    </label>
    <label className={styles["container"]} id="right">
      <input type="radio" name="my-radio-button" />
      <div className={styles["selected"]} id="rightradio"></div>
    </label>
  </div>
);

export default Radio_image;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_image = () => (
         <div>
          <label className="container" id="left">
  <input type="radio" name="my-radio-button" />
  <div className="selected" id="leftradio"></div>
</label>
<label className="container" id="middle">
  <input type="radio" name="my-radio-button" />
  <div className="selected" id="middleradio"></div>
</label>
<label className="container" id="right">
  <input type="radio" name="my-radio-button" />
  <div className="selected" id="rightradio"></div>
</label>
        </div>
        );

        export default Radio_image;
        
        
         */
}
