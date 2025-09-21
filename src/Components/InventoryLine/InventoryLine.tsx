import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { increasePower, spentCoin } from "../../store/slices/CKPSlice";
import { InventorySquare } from "../InventorySquare/InventorySquare";
import styles from "./InventoryLine.module.scss";
interface InventoryLineProps {
  urlItem?: string;
  descriptionItem: number;
  priceItem: number;
}
export const InventoryLine = ({ urlItem, descriptionItem, priceItem }: InventoryLineProps) => {
  const [isBought, setIsBought] = useState(false);
  const Coins = useAppSelector(state => state.CKP.Coins);
  const dispatch = useAppDispatch();
  const buy = () => {
    if (Coins >= priceItem && !isBought) {
      dispatch(increasePower(descriptionItem));
      dispatch(spentCoin(priceItem));
      setIsBought(true);
    }
  };
  return (
    <div className={isBought ? `${styles.InventoryLine} ${styles.InventoryLineBought}` : `${styles.InventoryLine}`}>
      <InventorySquare url={urlItem} />
      <div className={styles.description}>Увеличивает урон на {descriptionItem}</div>
      <button
        onClick={buy}
        className={Coins >= priceItem && !isBought ? `${styles.button} ${styles.buttonGood}` : `${styles.button}`}
      >
        {priceItem}
      </button>
    </div>
  );
};
