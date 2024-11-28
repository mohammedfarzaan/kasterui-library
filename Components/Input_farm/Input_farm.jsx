import React from "react";
import styles from "./Input_farm.module.css";

const Input_farm = () => (
  <div>
    <div className={styles["input-group"]}>
      <input
        className={styles["input-text"]}
        name="text"
        type="text"
        placeholder="Type here"
        autocomplete="off"
      />
      <label className={styles["input-text-label"]} for="text">
        Type here
      </label>
    </div>
  </div>
);

export default Input_farm;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_farm = () => (
         <div>
          <div className="input-group">
  <input
    className="input-text"
    name="text"
    type="text"
    placeholder="Type here"
    autocomplete="off"
  />
  <label className="input-text-label" for="text">Type here</label>
</div>
        </div>
        );

        export default Input_farm;
        
        
         */
}
