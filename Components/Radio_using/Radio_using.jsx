import React from "react";
import styles from "./Radio_using.module.css";

const Radio_using = () => (
  <div>
    <form className={styles["radio-form"]}>
      <input checked="" value="a" name="hopping" type="radio" id="a" />
      <label for="a">
        <span></span>A
      </label>
      <input value="b" name="hopping" type="radio" id="b" />
      <label for="b">
        <span></span>B
      </label>
      <input value="c" name="hopping" type="radio" id="c" />
      <label for="c">
        <span></span>C
      </label>
      <div className={styles["worm"]}>
        <div className={styles["worm__segment"]}></div>
      </div>
    </form>
  </div>
);

export default Radio_using;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_using = () => (
         <div>
          <form className="radio-form">
  <input checked="" value="a" name="hopping" type="radio" id="a" />
  <label for="a"><span></span>A</label>
  <input value="b" name="hopping" type="radio" id="b" />
  <label for="b"><span></span>B</label>
  <input value="c" name="hopping" type="radio" id="c" />
  <label for="c"><span></span>C</label>
  <div className="worm">
    <div className="worm__segment"></div>
  </div>
</form>
        </div>
        );

        export default Radio_using;
        
        
         */
}
