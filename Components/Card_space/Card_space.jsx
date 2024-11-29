import React from "react";
import styles from "./Card_space.module.css";

const Card_space = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["remove-when-use"]}>
        <label>Hover over me to show details</label>
      </div>
      <div className={styles["details"]}>
        <label>Title</label>
        <p>
          A beautiful place at the shore of XYZ sea.
          <br />
          <i>California, USA</i>
        </p>
      </div>
    </div>
  </div>
);

export default Card_space;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_space = () => (
         <div>
          <div className="card">
  <div className="remove-when-use">
    <label>Hover over me to show details</label>
  </div>
  <div className="details">
    <label>Title</label>
    <p>
      A beautiful place at the shore of XYZ sea.
      <br />
      <i>California, USA</i>
    </p>
  </div>
</div>
        </div>
        );

        export default Card_space;
        
        
         */
}
