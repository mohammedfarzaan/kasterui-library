import React from "react";
import styles from "./Input_beat.module.css";

const Input_beat = () => (
  <div>
    <section>
      <div className={styles["input-group"]}>
        <input
          className={styles["input"]}
          autocomplete="off"
          name="text"
          type="text"
          required=""
        />
        <label className={styles["user-label"]}>Full Name</label>
      </div>
    </section>
  </div>
);

export default Input_beat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_beat = () => (
         <div>
          <section>
    <div className="input-group">
        <input className="input" autocomplete="off" name="text" type="text" required="" />
        <label className="user-label">Full Name</label>
    </div>
</section>
        </div>
        );

        export default Input_beat;
        
        
         */
}
