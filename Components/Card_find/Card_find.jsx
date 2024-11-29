import React from "react";
import styles from "./Card_find.module.css";

const Card_find = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["date-time-container"]}>
        <time className={styles["date-time"]} datetime="2022-10-10">
          <span>2022</span>
          <span className={styles["separator"]}></span>
          <span>Oct 10</span>
        </time>
      </div>
      <div className={styles["content"]}>
        <div className={styles["infos"]}>
          <a href="#">
            <span className={styles["title"]}>
              How to make this blog card ?
            </span>
          </a>

          <p className={styles["description"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>

        <a className={styles["action"]} href="#">
          Read Blog
        </a>
      </div>
    </div>
  </div>
);

export default Card_find;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_find = () => (
         <div>
          <div className="card">
  <div className="date-time-container">
    <time className="date-time" datetime="2022-10-10">
      <span>2022</span>
      <span className="separator"></span>
      <span>Oct 10</span>
    </time>
  </div>
  <div className="content">
  
    <div className="infos">
      <a href="#">
        <span className="title">
         How to make this blog card ?
        </span>
      </a>

      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
        Molestias explicabo corporis voluptatem?
      </p>
    </div>

      <a className="action" href="#">
        Read Blog
      </a>
  </div>
</div>
        </div>
        );

        export default Card_find;
        
        
         */
}
