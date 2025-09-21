import { InventoryBar } from "../InventoryBar/InventoryBar";
import { EnemyWindow } from "../EnemyWindow/EnemyWindow";
import styles from "./Game.module.scss";
import { UserCharacter } from "../UserCharacter/UserCharacter";
import { UserCharacters } from "../../helpers/helpersArrays";
import { useAppSelector } from "../../store/hooks";
export const Game = () => {
  const UserLvl = useAppSelector(state => state.CKP.Lvl);
  return (
    <div className={styles.game}>
      <div className={styles.window}>
        <div className={styles.character}>
          <InventoryBar />
          <UserCharacter url={UserCharacters[UserLvl]} />
        </div>
        <EnemyWindow />
      </div>
    </div>
  );
};
