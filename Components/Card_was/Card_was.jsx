import React from "react";
import styles from "./Card_was.module.css";

const Card_was = () => (
  <div>
    <div className={styles["card-border"]}>
      <div className={styles["card-bg"]}>
        <div className={styles["container-logo"]}>
          <div className={styles["logo"]}></div>
          <div className={styles["logo-inside"]}>
            <div className={styles["first"]}></div>
            <div className={styles["second"]}></div>
          </div>
        </div>
        <div id="blur-area"></div>
        <div className={styles["marquee"]}>
          <div className={styles["marquee__inner"]} aria-hidden="true">
            <span className={styles["viper"]}>viper viper viper viper</span>
            <span className={styles["viper"]}>viper viper viper viper</span>
            <span className={styles["viper"]}>viper viper viper viper</span>
          </div>
        </div>
      </div>
      <div className={styles["mist-container"]}>
        <div className={styles["mist"]}></div>
      </div>
      <strong id="text-ext">Lorem ipsum</strong>
      <strong id="text-border">Lorem ipsum</strong>
    </div>
  </div>
);

export default Card_was;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_was = () => (
         <div>
          <div className="card-border">
  <div className="card-bg"> 
    <div className="container-logo">
      <div className="logo"></div>
        <div className="logo-inside">
          <div className="first"></div>
          <div className="second"></div>
        </div>
    </div>
    <div id="blur-area"></div>
    <div className="marquee">
      <div className="marquee__inner" aria-hidden="true">
        <span className="viper">viper viper viper viper</span>
        <span className="viper">viper viper viper viper</span>
        <span className="viper">viper viper viper viper</span>
      </div>
    </div>
    
  </div>
	<div className="mist-container">
		<div className="mist"></div>
	</div>
	<strong id="text-ext">Lorem ipsum</strong>
	<strong id="text-border">Lorem ipsum</strong>
</div>
        </div>
        );

        export default Card_was;
        
        
         */
}
