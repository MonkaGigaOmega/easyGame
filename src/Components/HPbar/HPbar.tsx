import styles from "./HPbar.module.scss";
interface HPbarProps {
  value: number;
  max: number;
}
export const HPbar = ({ value, max }: HPbarProps) => {
  return (
    <div className={styles.HPbar}>
      <progress className={styles.HPbarLine} value={value} max={max}></progress>
      <p>
        Heart Points: {value}/{max}
      </p>
    </div>
  );
};
