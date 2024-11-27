import React from "react";
import styles from "./Loader_door.module.css";

const Loader_door = () => (
  <div>
    <section className={styles["loader"]}>
      <div>
        <div>
          <span className={styles["one"] + styles["h6"]}></span>
          <span className={styles["two"] + styles["h3"]}></span>
        </div>
      </div>

      <div>
        <div>
          <span className={styles["one"] + styles["h1"]}></span>
        </div>
      </div>

      <div>
        <div>
          <span className={styles["two"] + styles["h2"]}></span>
        </div>
      </div>
      <div>
        <div>
          <span className={styles["one"] + styles["h4"]}></span>
        </div>
      </div>
    </section>
  </div>
);

export default Loader_door;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_door = () => (
         <div>
          <section className="loader">
      <div>
        <div>
          <span className="one h6"></span>
          <span className="two h3"></span>
        </div>
      </div>

      <div>
        <div>
          <span className="one h1"></span>
        </div>
      </div>

      <div>
        <div>
          <span className="two h2"></span>
        </div>
      </div>
      <div>
        <div>
          <span className="one h4"></span>
        </div>
      </div>
    </section>
        </div>
        );

        export default Loader_door;
        
        
         */
}
