import styles from "./Enemy.module.scss";
interface Enemy {
  url: string;
  size: number;
}
export const Enemy = ({ url, size }: Enemy) => {
  return (
    <div className={styles.Enemy}>
      <div className={styles.EnemyHitbox} style={{ backgroundImage: `url(${url})`, width: size, height: size }}></div>
    </div>
  );
};
