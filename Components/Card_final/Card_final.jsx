import React from "react";
import styles from "./Card_final.module.css";

const Card_final = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["pricing-block-content"]}>
        <p className={styles["pricing-plan"]}>Starter</p>
        <div
          data-currency-simple="USD"
          data-currency="$ USD"
          className={styles["price-value"]}
        >
          <p className={styles["price-number"]}>
            $<span className={styles["price-integer"]}>0</span>
          </p>
          <div id="priceDiscountCent">/mo</div>
        </div>
        <div className={styles["pricing-note"]}>free forever</div>
        <ul role="list" className={styles["check-list"]}>
          <li className={styles["check-list-item"]}>
            <svg
              style={{ color: "rgb(102, 78, 255)" }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="16"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="16"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="id1">
                  <path
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                    clipRule="nonzero"
                    fill="#664eff"
                  ></path>
                </clipPath>
              </defs>
              <g clip-path="url(#id1)">
                <path
                  fill="#664eff"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill-opacity="1"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
            Lorem Ipsum
          </li>
          <li className={styles["check-list-item"]}>
            <svg
              style={{ color: "rgb(102, 78, 255)" }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="16"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="16"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="id1">
                  <path
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                    clipRule="nonzero"
                    fill="#664eff"
                  ></path>
                </clipPath>
              </defs>
              <g clip-path="url(#id1)">
                <path
                  fill="#664eff"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill-opacity="1"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
            Lorem Ipsum
          </li>
          <li className={styles["check-list-item"]}>
            <svg
              style={{ color: "rgb(102, 78, 255)" }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="16"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="16"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="id1">
                  <path
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                    clipRule="nonzero"
                    fill="#664eff"
                  ></path>
                </clipPath>
              </defs>
              <g clip-path="url(#id1)">
                <path
                  fill="#664eff"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill-opacity="1"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
            Lorem Ipsum
          </li>
          <li className={styles["check-list-item"]}>
            <svg
              style={{ color: "rgb(102, 78, 255)" }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="16"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="16"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="id1">
                  <path
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                    clipRule="nonzero"
                    fill="#664eff"
                  ></path>
                </clipPath>
              </defs>
              <g clip-path="url(#id1)">
                <path
                  fill="#664eff"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                  fill-opacity="1"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
            Lorem Ipsum
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Card_final;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_final = () => (
         <div>
          <div className="card">
  <div className="pricing-block-content">
    <p className="pricing-plan">Starter</p>
      <div data-currency-simple="USD" data-currency="$ USD" className="price-value">
        <p className="price-number">$<span className="price-integer">0</span></p>
        <div id="priceDiscountCent">/mo</div>
      </div>
      <div className="pricing-note">free forever</div>
      <ul role="list" className="check-list">
        <li className="check-list-item"><svg style={{color:"rgb(102, 78, 255)"}} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="16" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656" clipRule="nonzero" fill="#664eff"></path></clipPath></defs><g clip-path="url(#id1)"><path fill="#664eff" d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125" fill-opacity="1" fillRule="nonzero"></path></g></svg>Lorem Ipsum</li>
        <li className="check-list-item"><svg style={{color:"rgb(102, 78, 255)"}} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="16" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656" clipRule="nonzero" fill="#664eff"></path></clipPath></defs><g clip-path="url(#id1)"><path fill="#664eff" d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125" fill-opacity="1" fillRule="nonzero"></path></g></svg>Lorem Ipsum</li>
        <li className="check-list-item"><svg style={{color:"rgb(102, 78, 255)"}} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="16" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656" clipRule="nonzero" fill="#664eff"></path></clipPath></defs><g clip-path="url(#id1)"><path fill="#664eff" d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125" fill-opacity="1" fillRule="nonzero"></path></g></svg>Lorem Ipsum</li>
        <li className="check-list-item"><svg style={{color:"rgb(102, 78, 255)"}} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="16" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656" clipRule="nonzero" fill="#664eff"></path></clipPath></defs><g clip-path="url(#id1)"><path fill="#664eff" d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125" fill-opacity="1" fillRule="nonzero"></path></g></svg>Lorem Ipsum</li>
      </ul>
  </div></div>
        </div>
        );

        export default Card_final;
        
        
         */
}
