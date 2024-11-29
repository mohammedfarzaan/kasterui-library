import React from "react";
import styles from "./Input_fight.module.css";

const Input_fight = () => (
  <div>
    <div className={styles["form__group"]}>
      <input
        type="text"
        className={styles["form__field"] + styles["w-100"]}
        placeholder="Input text"
      />
      <label for="name" className={styles["form__label"]}>
        {" "}
        Input text{" "}
      </label>
    </div>
  </div>
);

export default Input_fight;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_fight = () => (
         <div>
          <div className="form__group">
    <input type="text" className="form__field w-100" placeholder="Input text" />
    <label for="name" className="form__label"> Input text </label>
</div>
        </div>
        );

        export default Input_fight;
        
        
         */
}
