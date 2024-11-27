import React from "react";
import styles from "./Loader_film.module.css";

const Loader_film = () => (
  <div>
    <div className={styles["section-center"]}>
      <div className={styles["section-path"]}>
        <div className={styles["globe"]}>
          <div className={styles["wrapper"]}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_film;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_film = () => (
         <div>
          <div className="section-center">
  <div className="section-path">
    <div className="globe">
      <div className="wrapper">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
 </div>
        </div>
        );

        export default Loader_film;
        
        
         */
}
