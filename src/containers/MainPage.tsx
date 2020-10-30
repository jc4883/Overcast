import React from "react";

import Navigation from "components/common/Navigation";
import PodcastEntry from "components/PodcastEntry";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <section className={styles.MainPage}>
      <Navigation />
      <PodcastEntry
        title="Hibachi Episode"
        url="https://overcast-assets.s3.amazonaws.com/65F34B18-6DEE-4C2E-90D6-58D44E1B9749.mp4"
      />
    </section>
  );
};

export default MainPage;
