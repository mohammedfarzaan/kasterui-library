import React from "react";
import styles from "./Button_giant.module.css";

const Button_giant = () => (
  <div>
    <div className={styles["menu"]}>
      <div className={styles["item"]}>
        <a href="#" className={styles["link"]}>
          <span> Our Services </span>
          <svg viewBox="0 0 360 360" xml:space="preserve">
            <g id="SVGRepo_iconCarrier">
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              ></path>
            </g>
          </svg>
        </a>
        <div className={styles["submenu"]}>
          <div className={styles["submenu-item"]}>
            <a href="#" className={styles["submenu-link"]}>
              {" "}
              Development{" "}
            </a>
          </div>
          <div className={styles["submenu-item"]}>
            <a href="#" className={styles["submenu-link"]}>
              {" "}
              Design{" "}
            </a>
          </div>
          <div className={styles["submenu-item"]}>
            <a href="#" className={styles["submenu-link"]}>
              {" "}
              Marketing{" "}
            </a>
          </div>
          <div className={styles["submenu-item"]}>
            <a href="#" className={styles["submenu-link"]}>
              {" "}
              SEO{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Button_giant;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_giant = () => (
         <div>
          <div className="menu">
  <div className="item">
    <a href="#" className="link">
      <span> Our Services </span>
      <svg viewBox="0 0 360 360" xml:space="preserve">
        <g id="SVGRepo_iconCarrier">
          <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          ></path>
        </g>
      </svg>
    </a>
    <div className="submenu">
      <div className="submenu-item">
        <a href="#" className="submenu-link"> Development </a>
      </div>
      <div className="submenu-item">
        <a href="#" className="submenu-link"> Design </a>
      </div>
      <div className="submenu-item">
        <a href="#" className="submenu-link"> Marketing </a>
      </div>
      <div className="submenu-item">
        <a href="#" className="submenu-link"> SEO </a>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Button_giant;
        
        
         */
}
