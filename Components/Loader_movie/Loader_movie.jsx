import React from "react";
import styles from "./Loader_movie.module.css";

const Loader_movie = () => (
  <div>
    <div className={styles["chaotic-orbit"]}></div>
  </div>
);

export default Loader_movie;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_movie = () => (
         <div>
          <div className="chaotic-orbit"></div>
        </div>
        );

        export default Loader_movie;
        
        
         */
}
