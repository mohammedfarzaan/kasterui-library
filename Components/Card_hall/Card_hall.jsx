import React from "react";
import styles from "./Card_hall.module.css";

const Card_hall = () => (
  <div>
    <div className={styles["card"]}>
      <svg
        className={styles["img"]}
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        width="100%"
        height="100%"
        version="1.1"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 784.37 1277.39"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <g id="_1421394342400">
            <g>
              <polygon
                fill="#343434"
                fillRule="nonzero"
                points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"
              ></polygon>
              <polygon
                fill="#8C8C8C"
                fillRule="nonzero"
                points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33"
              ></polygon>
              <polygon
                fill="#3C3C3B"
                fillRule="nonzero"
                points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"
              ></polygon>
              <polygon
                fill="#8C8C8C"
                fillRule="nonzero"
                points="392.07,1277.38 392.07,956.52 -0,724.89"
              ></polygon>
              <polygon
                fill="#141414"
                fillRule="nonzero"
                points="392.07,882.29 784.13,650.54 392.07,472.33"
              ></polygon>
              <polygon
                fill="#393939"
                fillRule="nonzero"
                points="0,650.54 392.07,882.29 392.07,472.33"
              ></polygon>
            </g>
          </g>
        </g>
      </svg>
      <div className={styles["textBox"]}>
        <p className={styles["text"] + styles["head"]}>Ethereum</p>
        <span>Cryptocurrency</span>
        <p className={styles["text"] + styles["price"]}>1.654,34€</p>
      </div>
    </div>
  </div>
);

export default Card_hall;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_hall = () => (
         <div>
          <div className="card">
  <svg className="img" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" height="100%" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 784.37 1277.39" xmlnsXlink="http://www.w3.org/1999/xlink">
 <g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
  <g id="_1421394342400">
   <g>
    <polygon fill="#343434" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"></polygon>
    <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33"></polygon>
    <polygon fill="#3C3C3B" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"></polygon>
    <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89"></polygon>
    <polygon fill="#141414" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33"></polygon>
    <polygon fill="#393939" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33"></polygon>
   </g>
  </g>
 </g>
</svg>
  <div className="textBox">
    <p className="text head">Ethereum</p>
    <span>Cryptocurrency</span>
    <p className="text price">1.654,34€</p>
  </div>
</div>
        </div>
        );

        export default Card_hall;
        
        
         */
}
