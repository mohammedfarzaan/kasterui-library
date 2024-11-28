import React from "react";
import styles from "./Input_sort.module.css";

const Input_sort = () => (
  <div>
    <div className={styles["form__group"] + styles["field"]}>
      <input
        type="input"
        className={styles["form__field"]}
        placeholder="Name"
        required=""
      />
      <label for="name" className={styles["form__label"]}>
        Name
      </label>
    </div>
  </div>
);

export default Input_sort;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_sort = () => (
         <div>
          <div className="form__group field">
    <input type="input" className="form__field" placeholder="Name" required="" />
    <label for="name" className="form__label">Name</label>
</div>
        </div>
        );

        export default Input_sort;
        
        
         */
}
