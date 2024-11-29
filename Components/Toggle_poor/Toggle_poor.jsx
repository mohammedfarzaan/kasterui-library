import React from "react";
import styles from "./Toggle_poor.module.css";

const Toggle_poor = () => (
  <div>
    <span className={styles["switch"]}>
      <span className={styles["switch-border1"]}>
        <span className={styles["switch-border2"]}>
          <input checked="" type="checkbox" id="switch1" />
          <label for="switch1"></label>
          <span className={styles["switch-top"]}></span>
          <span className={styles["switch-shadow"]}></span>
          <span className={styles["switch-handle"]}></span>
          <span className={styles["switch-handle-left"]}></span>
          <span className={styles["switch-handle-right"]}></span>
          <span className={styles["switch-handle-top"]}></span>
          <span className={styles["switch-handle-bottom"]}></span>
          <span className={styles["switch-handle-base"]}></span>
          <span className={styles["switch-led"] + styles["switch-led-green"]}>
            <span className={styles["switch-led-border"]}>
              <span className={styles["switch-led-light"]}>
                <span className={styles["switch-led-glow"]}></span>
              </span>
            </span>
          </span>
          <span className={styles["switch-led"] + styles["switch-led-red"]}>
            <span className={styles["switch-led-border"]}>
              <span className={styles["switch-led-light"]}>
                <span className={styles["switch-led-glow"]}></span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  </div>
);

export default Toggle_poor;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_poor = () => (
         <div>
          <span className="switch">
	<span className="switch-border1">
		<span className="switch-border2">
			<input checked="" type="checkbox" id="switch1" />
			<label for="switch1"></label>
			<span className="switch-top"></span>
			<span className="switch-shadow"></span>
			<span className="switch-handle"></span>
			<span className="switch-handle-left"></span>
			<span className="switch-handle-right"></span>
			<span className="switch-handle-top"></span>
			<span className="switch-handle-bottom"></span>
			<span className="switch-handle-base"></span>
			<span className="switch-led switch-led-green">
				<span className="switch-led-border">
					<span className="switch-led-light">
						<span className="switch-led-glow"></span>
					</span>
				</span>
			</span>
			<span className="switch-led switch-led-red">
				<span className="switch-led-border">
					<span className="switch-led-light">
						<span className="switch-led-glow"></span>
					</span>
				</span>
			</span>
		</span>
	</span>
</span>
        </div>
        );

        export default Toggle_poor;
        
        
         */
}
