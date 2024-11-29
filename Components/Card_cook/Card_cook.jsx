import React from "react";
import styles from "./Card_cook.module.css";

const Card_cook = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-image"]}></div>
      <p className={styles["card-title"]}>Card title</p>
      <p className={styles["card-body"]}>
        Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec
        magna tristique, non lobortis.
      </p>
      <p className={styles["footer"]}>
        Written by <span className={styles["by-name"]}>John Doe</span> on{" "}
        <span className={styles["date"]}>25/05/23</span>
      </p>
    </div>
  </div>
);

export default Card_cook;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_cook = () => (
         <div>
          <div className="card">
  <div className="card-image"></div>
  <p className="card-title">Card title</p>
  <p className="card-body">
    Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
  </p>
  <p className="footer">Written by <span className="by-name">John Doe</span> on <span className="date">25/05/23</span></p>
</div>
        </div>
        );

        export default Card_cook;
        
        
         */
}
