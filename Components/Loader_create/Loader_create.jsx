import React from "react";
import styles from "./Loader_create.module.css";

const Loader_create = () => (
  <div>
    <div>
      <svg
        className={styles["loader"]}
        viewBox="0 0 48 30"
        width="48px"
        height="30px"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        >
          <g transform="translate(9.5,19)">
            <circle
              className={styles["loader_tire"]}
              r="9"
              stroke-dasharray="56.549 56.549"
            ></circle>
            <g
              className={styles["loader_spokes-spin"]}
              stroke-dasharray="31.416 31.416"
              stroke-dashoffset="-23.562"
            >
              <circle className={styles["loader_spokes"]} r="5"></circle>
              <circle
                className={styles["loader_spokes"]}
                r="5"
                transform="rotate(180,0,0)"
              ></circle>
            </g>
          </g>
          <g transform="translate(24,19)">
            <g
              className={styles["loader_pedals-spin"]}
              stroke-dasharray="25.133 25.133"
              stroke-dashoffset="-21.991"
              transform="rotate(67.5,0,0)"
            >
              <circle className={styles["loader_pedals"]} r="4"></circle>
              <circle
                className={styles["loader_pedals"]}
                r="4"
                transform="rotate(180,0,0)"
              ></circle>
            </g>
          </g>
          <g transform="translate(38.5,19)">
            <circle
              className={styles["loader_tire"]}
              r="9"
              stroke-dasharray="56.549 56.549"
            ></circle>
            <g
              className={styles["loader_spokes-spin"]}
              stroke-dasharray="31.416 31.416"
              stroke-dashoffset="-23.562"
            >
              <circle className={styles["loader_spokes"]} r="5"></circle>
              <circle
                className={styles["loader_spokes"]}
                r="5"
                transform="rotate(180,0,0)"
              ></circle>
            </g>
          </g>
          <polyline
            className={styles["loader_seat"]}
            points="14 3,18 3"
            stroke-dasharray="5 5"
          ></polyline>
          <polyline
            className={styles["loader_body"]}
            points="16 3,24 19,9.5 19,18 8,34 7,24 19"
            stroke-dasharray="79 79"
          ></polyline>
          <path
            className={styles["loader_handlebars"]}
            d="m30,2h6s1,0,1,1-1,1-1,1"
            stroke-dasharray="10 10"
          ></path>
          <polyline
            className={styles["loader_front"]}
            points="32.5 2,38.5 19"
            stroke-dasharray="19 19"
          ></polyline>
        </g>
      </svg>
    </div>
  </div>
);

export default Loader_create;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_create = () => (
         <div>
          <div>
  <svg className="loader" viewBox="0 0 48 30" width="48px" height="30px">
  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
    <g transform="translate(9.5,19)">
      <circle className="loader_tire" r="9" stroke-dasharray="56.549 56.549"></circle>
      <g className="loader_spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
        <circle className="loader_spokes" r="5"></circle>
        <circle className="loader_spokes" r="5" transform="rotate(180,0,0)"></circle>
      </g>
    </g>
    <g transform="translate(24,19)">
      <g className="loader_pedals-spin" stroke-dasharray="25.133 25.133" stroke-dashoffset="-21.991" transform="rotate(67.5,0,0)">
        <circle className="loader_pedals" r="4"></circle>
        <circle className="loader_pedals" r="4" transform="rotate(180,0,0)"></circle>
      </g>
    </g>
    <g transform="translate(38.5,19)">
      <circle className="loader_tire" r="9" stroke-dasharray="56.549 56.549"></circle>
      <g className="loader_spokes-spin" stroke-dasharray="31.416 31.416" stroke-dashoffset="-23.562">
        <circle className="loader_spokes" r="5"></circle>
        <circle className="loader_spokes" r="5" transform="rotate(180,0,0)"></circle>
      </g>
    </g>
    <polyline className="loader_seat" points="14 3,18 3" stroke-dasharray="5 5"></polyline>
    <polyline className="loader_body" points="16 3,24 19,9.5 19,18 8,34 7,24 19" stroke-dasharray="79 79"></polyline>
    <path className="loader_handlebars" d="m30,2h6s1,0,1,1-1,1-1,1" stroke-dasharray="10 10"></path>
    <polyline className="loader_front" points="32.5 2,38.5 19" stroke-dasharray="19 19"></polyline>
  </g>
</svg>
</div>
        </div>
        );

        export default Loader_create;
        
        
         */
}
