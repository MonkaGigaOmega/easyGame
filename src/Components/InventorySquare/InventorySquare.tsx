import styles from "./InventorySquare.module.scss";
interface InventorySquareProps {
  url?: string;
}
export const InventorySquare = ({ url }: InventorySquareProps) => {
  return (
    <div className={styles.square} style={{ backgroundImage: `url(${url})` }}>
      <div className={styles.item}></div>
    </div>
  );
};
