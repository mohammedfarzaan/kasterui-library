import React from "react";
import styles from "./Loader_hope.module.css";

const Loader_hope = () => (
  <div>
    <section>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["heart-rate"]}>
            <svg
              xml:space="preserve"
              viewBox="0 0 150 73"
              height="73px"
              width="150px"
              y="0px"
              x="0px"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
            >
              <polyline
                points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,
    63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
                stroke-miterlimit="10"
                strokeWidth="3"
                stroke="#009B9E"
                fill="none"
              ></polyline>
            </svg>

            <div className={styles["fade-in"]}></div>

            <div className={styles["fade-out"]}></div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Loader_hope;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_hope = () => (
         <div>
          <section>
  <div className="container">
    <div className="content">
      <div className="heart-rate">
        <svg
          xml:space="preserve"
          viewBox="0 0 150 73"
          height="73px"
          width="150px"
          y="0px"
          x="0px"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
        >
          <polyline
            points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,
    63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
            stroke-miterlimit="10"
            strokeWidth="3"
            stroke="#009B9E"
            fill="none"
          ></polyline>
        </svg>

        <div className="fade-in"></div>

        <div className="fade-out"></div>
      </div>
    </div>
  </div>
</section>
        </div>
        );

        export default Loader_hope;
        
        
         */
}
