import React from "react";
import styles from "./Radio_stick.module.css";

const Radio_stick = () => (
  <div>
    <form className={styles["form"]}>
      <label for="01">One</label>
      <input id="01" type="radio" name="r" value="1" checked="" />
      <label for="02">Two</label>
      <input id="02" type="radio" name="r" value="2" />
      <label for="03">Three</label>
      <input id="03" type="radio" name="r" value="3" />
    </form>
  </div>
);

export default Radio_stick;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_stick = () => (
         <div>
          <form className="form">
    <label for="01">One</label>
    <input id="01" type="radio" name="r" value="1" checked="" />
    <label for="02">Two</label>
    <input id="02" type="radio" name="r" value="2" />
    <label for="03">Three</label>
    <input id="03" type="radio" name="r" value="3" />
</form>
        </div>
        );

        export default Radio_stick;
        
        
         */
}
