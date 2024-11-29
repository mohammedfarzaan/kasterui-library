import React from "react";
import styles from "./Card_forgot.module.css";

const Card_forgot = () => (
  <div>
    <div className={styles["container"]}>
      <article className={styles["card"]}>
        <a className={styles["card__link"]} href="#">
          <div className={styles["card__icon"]}>
            <svg viewBox="0 0 1129 994">
              <g strokeWidth="41" stroke="#999" fillRule="nonzero" fill="none">
                <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z"></path>
                <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z"></path>
                <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z"></path>
              </g>
            </svg>
          </div>

          <div className={styles["card__media"]}>
            <svg viewBox="0 0 1129 994">
              <g
                strokeWidth="41"
                stroke="#F5F5F5"
                fillRule="nonzero"
                fill="none"
              >
                <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z"></path>
                <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z"></path>
                <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z"></path>
              </g>
            </svg>
          </div>

          <div className={styles["card__header"]}>
            <p className={styles["card__header-title"]}>Title of Card</p>
            <p className={styles["card__header-meta"]}>Subtitle</p>
            <div className={styles["card__header-icon"]}>
              <svg viewBox="0 0 28 25">
                <path
                  d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
          </div>
        </a>
      </article>
    </div>
  </div>
);

export default Card_forgot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_forgot = () => (
         <div>
          <div className="container">
	<article className="card">
		<a className="card__link" href="#">
		
			
			<div className="card__icon">
				<svg viewBox="0 0 1129 994">
					<g strokeWidth="41" stroke="#999" fillRule="nonzero" fill="none">
						<path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z"></path>
						<path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z"></path>
						<path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z"></path>
					</g>
				</svg>
			</div>

			
			<div className="card__media">
				<svg viewBox="0 0 1129 994">
					<g strokeWidth="41" stroke="#F5F5F5" fillRule="nonzero" fill="none">
						<path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z"></path>
						<path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z"></path>
						<path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z"></path>
					</g>
				</svg>
			</div>

			
			<div className="card__header">
				<p className="card__header-title">Title of Card</p>
				<p className="card__header-meta">Subtitle</p>
				<div className="card__header-icon">
					<svg viewBox="0 0 28 25">
						<path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" fill="#fff"></path>
					</svg>
				</div>
			</div>
			
		</a>
	</article>
</div>
        </div>
        );

        export default Card_forgot;
        
        
         */
}
