import { useAppSelector } from "../../store/hooks";
import styles from "./UserCharacter.module.scss";
interface UserCharacterProps {
  url: string;
}
export const UserCharacter = ({ url }: UserCharacterProps) => {
  const { Power, Lvl } = useAppSelector(state => state.CKP);
  // const email = useAppSelector(state => state.auth.user?.email);
  return (
    <div className={styles.UserCharacterWrapper}>
      <div className={styles.UserCharacter} style={{ backgroundImage: `url(${url})` }}></div>
      <div className={styles.info}>
        <p>Power: {Power}</p>
        <p>Level: {Lvl}</p>
        {/* {email && <p>Nickname: {email}</p>} */}
        <button
          className={styles.button}
          onClick={() => {
            localStorage.setItem("Gameprogress", JSON.stringify({ Coins: 0, Kills: 0, Power: 1, Lvl: 0, ShopID: 0 }));
          }}
        >
          Сброс прогресса
        </button>
        <button
          className={styles.button}
          onClick={() => {
            window.location.reload();
          }}
        >
          Обновить
        </button>
      </div>
    </div>
  );
};
