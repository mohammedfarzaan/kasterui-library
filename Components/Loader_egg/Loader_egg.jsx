import React from "react";
import styles from "./Loader_egg.module.css";

const Loader_egg = () => (
  <div>
    <div
      aria-label="Orange and tan hamster running in a metal wheel"
      role="img"
      className={styles["wheel-and-hamster"]}
    >
      <div className={styles["wheel"]}></div>
      <div className={styles["hamster"]}>
        <div className={styles["hamster__body"]}>
          <div className={styles["hamster__head"]}>
            <div className={styles["hamster__ear"]}></div>
            <div className={styles["hamster__eye"]}></div>
            <div className={styles["hamster__nose"]}></div>
          </div>
          <div
            className={styles["hamster__limb"] + styles["hamster__limb--fr"]}
          ></div>
          <div
            className={styles["hamster__limb"] + styles["hamster__limb--fl"]}
          ></div>
          <div
            className={styles["hamster__limb"] + styles["hamster__limb--br"]}
          ></div>
          <div
            className={styles["hamster__limb"] + styles["hamster__limb--bl"]}
          ></div>
          <div className={styles["hamster__tail"]}></div>
        </div>
      </div>
      <div className={styles["spoke"]}></div>
    </div>
  </div>
);

export default Loader_egg;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_egg = () => (
         <div>
          <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
	<div className="wheel"></div>
	<div className="hamster">
		<div className="hamster__body">
			<div className="hamster__head">
				<div className="hamster__ear"></div>
				<div className="hamster__eye"></div>
				<div className="hamster__nose"></div>
			</div>
			<div className="hamster__limb hamster__limb--fr"></div>
			<div className="hamster__limb hamster__limb--fl"></div>
			<div className="hamster__limb hamster__limb--br"></div>
			<div className="hamster__limb hamster__limb--bl"></div>
			<div className="hamster__tail"></div>
		</div>
	</div>
	<div className="spoke"></div>
</div>
        </div>
        );

        export default Loader_egg;
        
        
         */
}
