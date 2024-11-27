import React from "react";
import styles from "./Loader_phrase.module.css";

const Loader_phrase = () => (
  <div>
    <ul>
      <li>
        <div className={styles["loader"]}>
          <div className={styles["child"]}></div>
        </div>
      </li>

      <li>
        <div className={styles["text"]}></div>
      </li>
    </ul>
  </div>
);

export default Loader_phrase;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_phrase = () => (
         <div>
          <ul>
  <li>
    <div className="loader">
      <div className="child"></div>
    </div>
  </li>

  <li>
    <div className="text"></div>
  </li>
</ul>
        </div>
        );

        export default Loader_phrase;
        
        
         */
}
