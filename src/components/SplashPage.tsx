import React from "react";
import { Link } from "react-router-dom";

import Navigation from "components/common/Navigation";

import twitter_header_photo from "../overcast_icons/twitter_header_photo_2.png";

import styles from "./SplashPage.module.scss";

const SplashPage = () => {
  return (
    <section className={styles.SplashPage}>
      <Navigation />

      <section className={styles.lead_content}>
        <div className={styles.lead}>
          <img
            src={twitter_header_photo}
            className={styles.twitter_header_photo}
          />
          <h1>A Podcast on Millenial Life</h1>
          <p className={styles.subtitle}>
            With your hosts{" "}
            <span className={styles.peter_name}>Peter Choi</span> and{" "}
            <span className={styles.colin_name}>Colin Cool</span>!
          </p>
        </div>
      </section>

      <section className={styles.features_content}>
        <div className={styles.features_content_header_container}>
          <h1 className={styles.features_content_header}>About Us</h1>
        </div>
        <div className={styles.features}>
          <div>
            <h2>Peter Choi</h2>
            <p>
              Hey! I'm a 21 year old student at Columbia University studying
              Computer Science. I enjoy talking about technology, careers,
              evolution, and human nature. Most of all, I like talking about
              everyday life and the ridiculous things we do as a society.
            </p>
          </div>
          <div>
            <h2>Colin Cool</h2>
            <p>
              I'm Colin! I'm also 21 and I study systems engineering at the
              University of Virginia. I like talking about pop culture,
              politics, music, sports, and human nature. Oh, Peter and I know
              each other from high school. Hey thanks for checking out our
              podcast, and I hope you enjoy!
            </p>
          </div>
        </div>
        <Link to="/episodes" className={styles.episodes_button}>
          Check Out Episodes for Free!
        </Link>
      </section>
      <footer className={styles.footer}>
        <p>
          <strong>Reach out at peterchoi@gmail.com!</strong>
        </p>
      </footer>
    </section>
  );
};

export default SplashPage;
