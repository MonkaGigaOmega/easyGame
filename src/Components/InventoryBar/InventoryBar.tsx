import styles from "./InventoryBar.module.scss";
import { Weapons } from "../../helpers/helpersArrays";
import { InventoryLine } from "../InventoryLine/InventoryLine";
import { shopList } from "../../helpers/gameShop";
export const InventoryBar = () => {
  const shopdata = shopList;
  return (
    <div className={styles.InventoryBar}>
      {shopdata.map(item => {
        return (
          <InventoryLine
            id={item.id}
            key={item.id}
            urlItem={Weapons[0]}
            descriptionItem={item.power}
            priceItem={item.price}
          />
        );
      })}
    </div>
  );
};
