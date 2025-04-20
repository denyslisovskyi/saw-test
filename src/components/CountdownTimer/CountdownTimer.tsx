import React, { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

const CountdownTimer = ({ initialSeconds = 40000 }) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className={styles.timerWrapper}>
      <div className={styles.label}>ПРОПОЗИЦІЯ ДІЄ:</div>
      <div className={styles.timeRow}>
        <div className={styles.timeUnit}>
          <div className={styles.digits}>
            <div className={styles.box}>{hours[0]}</div>
            <div className={styles.box}>{hours[1]}</div>
          </div>
          <div className={styles.unit}>ГОДИН</div>
        </div>

        <div className={styles.timeUnit}>
          <div className={styles.digits}>
            <div className={styles.box}>{minutes[0]}</div>
            <div className={styles.box}>{minutes[1]}</div>
          </div>
          <div className={styles.unit}>ХВИЛИН</div>
        </div>

        <div className={styles.timeUnit}>
          <div className={styles.digits}>
            <div className={styles.box}>{seconds[0]}</div>
            <div className={styles.box}>{seconds[1]}</div>
          </div>
          <div className={styles.unit}>СЕКУНД</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
