import React from "react";
import styles from "./Button_symbol.module.css";

const Button_symbol = () => (
  <div>
    <div id="pulsa" className={styles["pulsa"]}>
      <button id="cta" className={styles["cta"]}>
        Spatial button<div className={styles["star"] + styles["a"]}></div>
        <div className={styles["star"] + styles["b"]}></div>
        <div className={styles["star"] + styles["c"]}></div>
        <div className={styles["star"] + styles["d"]}></div>
        <div className={styles["star"] + styles["e"]}></div>
        <div className={styles["star"] + styles["f"]}></div>
        <div className={styles["star"] + styles["g"]}></div>
        <svg
          version="1.1"
          viewBox="0 0 1024 1024"
          width="24px"
          className="rocket"
        >
          <path
            fill="#3A7EB9"
            d="M662.72 462.784l136.448 169.408v173.248l-136.448-48.32zM342.72 457.344L206.272 626.816v173.248l136.448-48.384z"
          ></path>
          <path
            fill="#D48171"
            d="M570.688 418.688l-142.848 1.152a266.496 266.496 0 0 1-20.288-0.576l3.712 448.64c0.256 28.928 94.272 130.048 94.272 130.048s93.888-102.656 93.632-131.584l-3.712-448.96a344.64 344.64 0 0 1-24.768 1.28z"
          ></path>
          <path
            fill="#E9DF92"
            d="M531.456 599.296l-63.04 0.576c-3.008 0-5.952-0.064-8.96-0.384l2.176 257.792c0.128 16.64 41.728 74.816 41.728 74.816s41.344-58.944 41.28-75.52l-2.176-257.92c-3.648 0.384-7.296 0.64-11.008 0.64z"
          ></path>
          <path
            fill="#B5D5EB"
            d="M554.304 93.568a324.352 324.352 0 0 0-110.592 1.728L342.72 240.768v584.512c13.824-0.96 27.968-1.536 42.368-1.536h245.248c11.84 0 23.36 0.384 34.816 1.024V253.312L554.304 93.568z"
          ></path>
          <path
            fill="#3A7EB9"
            d="M541.44 94.144L500.416 35.008l-45.696 59.136v29.504h89.024v-29.504zM459.456 288.64h88.96v88.896h-88.96zM459.456 467.456h88.96v88.96h-88.96zM459.456 634.176h88.96v88.896h-88.96zM364.928 788.736h277.76v44.352h-277.76z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
);

export default Button_symbol;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_symbol = () => (
         <div>
          <div id="pulsa" className="pulsa">
  <button id="cta" className="cta">
    Spatial button<div className="star a"></div>
  <div className="star b"></div>
  <div className="star c"></div>
  <div className="star d"></div>
  <div className="star e"></div>
  <div className="star f"></div>
  <div className="star g"></div>
  <svg version="1.1" viewBox="0 0 1024 1024" width="24px" className="rocket"><path fill="#3A7EB9" d="M662.72 462.784l136.448 169.408v173.248l-136.448-48.32zM342.72 457.344L206.272 626.816v173.248l136.448-48.384z"></path><path fill="#D48171" d="M570.688 418.688l-142.848 1.152a266.496 266.496 0 0 1-20.288-0.576l3.712 448.64c0.256 28.928 94.272 130.048 94.272 130.048s93.888-102.656 93.632-131.584l-3.712-448.96a344.64 344.64 0 0 1-24.768 1.28z"></path><path fill="#E9DF92" d="M531.456 599.296l-63.04 0.576c-3.008 0-5.952-0.064-8.96-0.384l2.176 257.792c0.128 16.64 41.728 74.816 41.728 74.816s41.344-58.944 41.28-75.52l-2.176-257.92c-3.648 0.384-7.296 0.64-11.008 0.64z"></path><path fill="#B5D5EB" d="M554.304 93.568a324.352 324.352 0 0 0-110.592 1.728L342.72 240.768v584.512c13.824-0.96 27.968-1.536 42.368-1.536h245.248c11.84 0 23.36 0.384 34.816 1.024V253.312L554.304 93.568z"></path><path fill="#3A7EB9" d="M541.44 94.144L500.416 35.008l-45.696 59.136v29.504h89.024v-29.504zM459.456 288.64h88.96v88.896h-88.96zM459.456 467.456h88.96v88.96h-88.96zM459.456 634.176h88.96v88.896h-88.96zM364.928 788.736h277.76v44.352h-277.76z"></path></svg>
  </button>
  
</div>
        </div>
        );

        export default Button_symbol;
        
        
         */
}
