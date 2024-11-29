import React from "react";
import styles from "./Card_same.module.css";

const Card_same = () => (
  <div>
    <article className={styles["job-card"]}>
      <div>
        <p className={styles["text-title"]}>
          Affiliate and Influencer Marketing
        </p>
        <p className={styles["post-date"]}>Posted on 23 Dec, 2023</p>
      </div>

      <div className={styles["budget-exp"]}>
        <div>
          <p className={styles["value"]}>$120</p>
          <p className={styles["label"]}>Budget</p>
        </div>
        <div>
          <p className={styles["value"]}>Intermediate</p>
          <p className={styles["label"]}>Experience</p>
        </div>
      </div>

      <p className={styles["text-body"]}>
        Are you a highly motivated and results-driven individual with a passion
        for affiliate and influencer marketing? Jaspr, a fast-growing company
        specializing in air quality products, is seeking a dedicated specialist
        to help us scale our affiliate and influencer marketing efforts,
        utilizing tools like Hype Auditor.
      </p>

      <div className={styles["tags"]}>
        <article>
          <p>marketing</p>
          <p>seo</p>
          <p>content writing</p>
        </article>
      </div>

      <div>
        <a href="/job/<%= job._id %>">
          <button className={styles["card-btn"]}>See More</button>
        </a>
      </div>
    </article>
  </div>
);

export default Card_same;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_same = () => (
         <div>
          <article className="job-card">
  <div>
    <p className="text-title">Affiliate and Influencer Marketing</p>
    <p className="post-date">Posted on 23 Dec, 2023</p>
  </div>

  <div className="budget-exp">
    <div>
      <p className="value">$120</p>
      <p className="label">Budget</p>
    </div>
    <div>
      <p className="value">Intermediate</p>
      <p className="label">Experience</p>
    </div>
  </div>

  <p className="text-body">
    Are you a highly motivated and results-driven individual with a passion for
    affiliate and influencer marketing? Jaspr, a fast-growing company
    specializing in air quality products, is seeking a dedicated specialist to
    help us scale our affiliate and influencer marketing efforts, utilizing
    tools like Hype Auditor.
  </p>

  <div className="tags">
    <article>
      <p>marketing</p>
      <p>seo</p>
      <p>content writing</p>
    </article>
  </div>

  <div>
    <a href="/job/<%= job._id %>">
      <button className="card-btn">See More</button>
    </a>
  </div>
</article>
        </div>
        );

        export default Card_same;
        
        
         */
}
