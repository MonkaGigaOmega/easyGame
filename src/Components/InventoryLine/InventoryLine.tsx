import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { increasePower, increaseShopid, spentCoin } from "../../store/slices/CKPSlice";
import { InventorySquare } from "../InventorySquare/InventorySquare";
import styles from "./InventoryLine.module.scss";

interface InventoryLineProps {
  urlItem?: string;
  descriptionItem: number;
  priceItem: number;
  id: number;
}

export const InventoryLine = ({ urlItem, descriptionItem, priceItem, id }: InventoryLineProps) => {
  const Coins = useAppSelector(state => state.CKP.Coins);
  const dispatch = useAppDispatch();
  const itemId = useAppSelector(state => state.CKP.ShopID);
  const [isBought, setIsBought] = useState(false);
  const buy = () => {
    if (Coins >= priceItem && !isBought) {
      setIsBought(true);
      dispatch(increasePower(descriptionItem));
      dispatch(spentCoin(priceItem));
      dispatch(increaseShopid(1));
    }
  };

  return (
    <div className={itemId > id ? `${styles.InventoryLine} ${styles.InventoryLineBought}` : styles.InventoryLine}>
      <InventorySquare url={urlItem} />
      <div className={styles.description}>Увеличивает урон на {descriptionItem}</div>
      <button
        onClick={buy}
        disabled={itemId > id || Coins < priceItem}
        className={itemId <= id && Coins >= priceItem ? `${styles.button} ${styles.buttonGood}` : styles.button}
      >
        {itemId > id ? "Куплено" : priceItem}
      </button>
    </div>
  );
};
