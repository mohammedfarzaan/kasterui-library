import React from "react";
import styles from "./Toggle_glass.module.css";

const Toggle_glass = () => (
  <div>
    <div className={styles["container"]}>
      <label className={styles["switch"]}>
        <input
          role="switch"
          type="checkbox"
          className={styles["switch__input"]}
        />
        <svg
          aria-hidden="true"
          height="12px"
          width="12px"
          viewBox="0 0 12 12"
          className="switch__icon switch__icon--light"
        >
          <g strokeLinecap="round" strokeWidth="1" stroke="#fff" fill="none">
            <circle r="2" cy="6" cx="6"></circle>
            <g stroke-dasharray="1.5 1.5">
              <polyline
                transform="rotate(0,6,6)"
                points="6 10,6 11.5"
              ></polyline>
              <polyline
                transform="rotate(45,6,6)"
                points="6 10,6 11.5"
              ></polyline>
              <polyline
                transform="rotate(90,6,6)"
                points="6 10,6 11.5"
              ></polyline>
              <polyline
                transform="rotate(135,6,6)"
                points="6 10,6 11.5"
              ></polyline>
              <polyline
                transform="rotate(180,6,6)"
                points="6 10,6 11.5"
              ></polyline>
              <polyline
                transform="rotate(225,6,6)"
                points="6 10,6 11.5"
              ></polyline>
              <polyline
                transform="rotate(270,6,6)"
                points="6 10,6 11.5"
              ></polyline>
              <polyline
                transform="rotate(315,6,6)"
                points="6 10,6 11.5"
              ></polyline>
            </g>
          </g>
        </svg>
        <svg
          aria-hidden="true"
          height="12px"
          width="12px"
          viewBox="0 0 12 12"
          className="switch__icon switch__icon--dark"
        >
          <g
            transform="rotate(-45,6,6)"
            strokeLinejoin="round"
            strokeWidth="1"
            stroke="#fff"
            fill="none"
          >
            <path d="m9,10c-2.209,0-4-1.791-4-4s1.791-4,4-4c.304,0,.598.041.883.105-.995-.992-2.367-1.605-3.883-1.605C2.962.5.5,2.962.5,6s2.462,5.5,5.5,5.5c1.516,0,2.888-.613,3.883-1.605-.285.064-.578.105-.883.105Z"></path>
          </g>
        </svg>
        <span className={styles["switch__sr"]}>Dark Mode</span>
      </label>
      <div></div>
    </div>
  </div>
);

export default Toggle_glass;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_glass = () => (
         <div>
          <div className="container">
<label className="switch">
	<input role="switch" type="checkbox" className="switch__input" />
	<svg aria-hidden="true" height="12px" width="12px" viewBox="0 0 12 12" className="switch__icon switch__icon--light">
		<g strokeLinecap="round" strokeWidth="1" stroke="#fff" fill="none">
			<circle r="2" cy="6" cx="6"></circle>
			<g stroke-dasharray="1.5 1.5">
				<polyline transform="rotate(0,6,6)" points="6 10,6 11.5"></polyline>
				<polyline transform="rotate(45,6,6)" points="6 10,6 11.5"></polyline>
				<polyline transform="rotate(90,6,6)" points="6 10,6 11.5"></polyline>
				<polyline transform="rotate(135,6,6)" points="6 10,6 11.5"></polyline>
				<polyline transform="rotate(180,6,6)" points="6 10,6 11.5"></polyline>
				<polyline transform="rotate(225,6,6)" points="6 10,6 11.5"></polyline>
				<polyline transform="rotate(270,6,6)" points="6 10,6 11.5"></polyline>
				<polyline transform="rotate(315,6,6)" points="6 10,6 11.5"></polyline>
			</g>
		</g>
	</svg>
	<svg aria-hidden="true" height="12px" width="12px" viewBox="0 0 12 12" className="switch__icon switch__icon--dark">
		<g transform="rotate(-45,6,6)" strokeLinejoin="round" strokeWidth="1" stroke="#fff" fill="none">
			<path d="m9,10c-2.209,0-4-1.791-4-4s1.791-4,4-4c.304,0,.598.041.883.105-.995-.992-2.367-1.605-3.883-1.605C2.962.5.5,2.962.5,6s2.462,5.5,5.5,5.5c1.516,0,2.888-.613,3.883-1.605-.285.064-.578.105-.883.105Z"></path>
		</g>	
	</svg>
	<span className="switch__sr">Dark Mode</span>
</label>
<div></div></div>
        </div>
        );

        export default Toggle_glass;
        
        
         */
}
