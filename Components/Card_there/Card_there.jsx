import React from "react";
import styles from "./Card_there.module.css";

const Card_there = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["image"]}></div>
      <div className={styles["content"]}>
        <a href="#">
          <span className={styles["title"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </a>

        <p className={styles["desc"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
        </p>

        <a className={styles["action"]} href="#">
          Find out more
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>
);

export default Card_there;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_there = () => (
         <div>
          <div className="card">
 <div className="image"></div>
  <div className="content">
    <a href="#">
      <span className="title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
    </a>

    <p className="desc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
      dolores, possimus pariatur animi temporibus nesciunt praesentium 
    </p>

    <a className="action" href="#">
      Find out more
      <span aria-hidden="true">
        →
      </span>
    </a>
  </div>
</div>
        </div>
        );

        export default Card_there;
        
        
         */
}
