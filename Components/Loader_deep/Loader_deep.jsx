import React from "react";
import styles from "./Loader_deep.module.css";

const Loader_deep = () => (
  <div>
    <div className={styles["piggy-wrapper"]}>
      <div className={styles["piggy-wrap"]}>
        <div className={styles["piggy"]}>
          <div className={styles["nose"]}></div>
          <div className={styles["mouth"]}></div>
          <div className={styles["ear"]}></div>
          <div className={styles["tail"]}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles["eye"]}></div>
          <div className={styles["hole"]}></div>
        </div>
      </div>
      <div className={styles["coin-wrap"]}>
        <div className={styles["coin"]}>$</div>
      </div>
      <div className={styles["legs"]}></div>
      <div className={styles["legs"] + styles["back"]}></div>
    </div>
  </div>
);

export default Loader_deep;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_deep = () => (
         <div>
          <div className="piggy-wrapper">
		<div className="piggy-wrap">
			<div className="piggy">
				<div className="nose"></div>
				<div className="mouth"></div>
				<div className="ear"></div>
				<div className="tail">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className="eye"></div>
				<div className="hole"></div>
			</div>
		</div>
		<div className="coin-wrap">
			<div className="coin">$</div>
		</div>
		<div className="legs"></div>
		<div className="legs back"></div>
	</div>
        </div>
        );

        export default Loader_deep;
        
        
         */
}
