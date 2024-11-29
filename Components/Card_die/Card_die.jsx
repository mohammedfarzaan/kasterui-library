import React from "react";
import styles from "./Card_die.module.css";

const Card_die = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-image"]}></div>
      <div className={styles["category"]}> Illustration </div>
      <div className={styles["heading"]}>
        {" "}
        A heading that must span over two lines
        <div className={styles["author"]}>
          {" "}
          By <span className={styles["name"]}>Abi</span> 4 days ago
        </div>
      </div>
    </div>
  </div>
);

export default Card_die;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_die = () => (
         <div>
          <div className="card">
    <div className="card-image"></div>
    <div className="category"> Illustration </div>
    <div className="heading"> A heading that must span over two lines
        <div className="author"> By <span className="name">Abi</span> 4 days ago</div>
    </div>
</div>
        </div>
        );

        export default Card_die;
        
        
         */
}
