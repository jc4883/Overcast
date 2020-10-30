import React from "react";

import styles from "./PodcastEntry.module.scss";

interface ComponentProps {
  title: string;
  url: string;
}

const PodcastEntry = (props: ComponentProps) => {
  const { title, url } = props;
  return (
    <div className={styles.episodes}>
      <h1>{title}</h1>
      <iframe className={styles.iframe} src={url}></iframe>
    </div>
  );
};

export default PodcastEntry;
