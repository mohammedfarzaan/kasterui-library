import React from "react";
import styles from "./Radio_mine.module.css";

const Radio_mine = () => (
  <div>
    <form className={styles["my-form"]}>
      <div>
        <input id="radio-1" type="radio" name="option" />
        <label for="radio-1">Radio 1</label>
      </div>
      <div>
        <input checked="" id="radio-2" type="radio" name="option" />
        <label for="radio-2">Radio 2</label>
      </div>
      <div>
        <input id="radio-3" type="radio" name="option" />
        <label for="radio-3">Radio 3</label>
      </div>
      <div>
        <input id="radio-4" type="radio" name="option" />
        <label for="radio-4">Radio 4</label>
      </div>
    </form>
  </div>
);

export default Radio_mine;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_mine = () => (
         <div>
          <form className="my-form">
  <div>
    <input id="radio-1" type="radio" name="option" />
    <label for="radio-1">Radio 1</label>
  </div>
  <div>
    <input checked="" id="radio-2" type="radio" name="option" />
    <label for="radio-2">Radio 2</label>
  </div>
  <div>
    <input id="radio-3" type="radio" name="option" />
    <label for="radio-3">Radio 3</label>
  </div>
  <div>
    <input id="radio-4" type="radio" name="option" />
    <label for="radio-4">Radio 4</label>
  </div>
</form>
        </div>
        );

        export default Radio_mine;
        
        
         */
}
