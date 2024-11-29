import React from "react";
import styles from "./Card_alone.module.css";

const Card_alone = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-wrapper"]}>
        <div className={styles["card-icon"]}>
          <div className={styles["icon-cart-box"]}>
            <svg
              viewBox="0 0 576 512"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                fill="#009688"
              ></path>
            </svg>
          </div>
        </div>

        <div className={styles["card-content"]}>
          <div className={styles["card-title-wrapper"]}>
            <span className={styles["card-title"]}>Added to cart!</span>
            <span className={styles["card-action"]}>
              <svg
                viewBox="0 0 384 512"
                width="15"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
              </svg>
            </span>
          </div>
          <div className={styles["product-name"]}>
            ASUS Vivobook Go 15 (E1504F)
          </div>
          <div className={styles["product-price"]}>$899.00</div>
          <button className={styles["btn-view-cart"]} type="button">
            View Cart
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Card_alone;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_alone = () => (
         <div>
          <div className="card">
  <div className="card-wrapper">
    <div className="card-icon">
      <div className="icon-cart-box">
        <svg
          viewBox="0 0 576 512"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
            fill="#009688"
          ></path>
        </svg>
      </div>
    </div>

    <div className="card-content">
      <div className="card-title-wrapper">
        <span className="card-title">Added to cart!</span>
        <span className="card-action">
          <svg
            viewBox="0 0 384 512"
            width="15"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            ></path>
          </svg>
        </span>
      </div>
      <div className="product-name">ASUS Vivobook Go 15 (E1504F)</div>
      <div className="product-price">$899.00</div>
      <button className="btn-view-cart" type="button">View Cart</button>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_alone;
        
        
         */
}
