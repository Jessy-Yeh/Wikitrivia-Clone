import styles from "./Home.module.css";

type Props = {
  streak: number;
};

const Homepage = ({ streak }: Props) => {
  return (
    <>
      <h1 className={styles.title}>
        PLACE THE CARDS ON THE TIMELINE IN THE CORRECT ORDER.
      </h1>
      <div className={styles["streak-card"]}>
        <p>BEST STREAK</p>
        <p>2</p>
      </div>
      <button className={styles.start}>START GAME</button>
    </>
  );
};

export default Homepage;
