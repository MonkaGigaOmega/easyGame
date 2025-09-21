import styles from "./InventoryBar.module.scss";
import { Weapons } from "../../helpers/helpersArrays";
import { InventoryLine } from "../InventoryLine/InventoryLine";
export const InventoryBar = () => {
  return (
    <div className={styles.InventoryBar}>
      <InventoryLine urlItem={Weapons[0]} descriptionItem={1} priceItem={20} />
      <InventoryLine urlItem={Weapons[0]} descriptionItem={2} priceItem={100} />
      <InventoryLine urlItem={Weapons[0]} descriptionItem={3} priceItem={200} />
      <InventoryLine urlItem={Weapons[0]} descriptionItem={4} priceItem={300} />
      <InventoryLine urlItem={Weapons[0]} descriptionItem={5} priceItem={400} />
      <InventoryLine urlItem={Weapons[0]} descriptionItem={6} priceItem={500} />
    </div>
  );
};
