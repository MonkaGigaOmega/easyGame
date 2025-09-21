import { useState } from "react";
import { Enemy } from "../Enemy/Enemy";
import { HPbar } from "../HPbar/HPbar";
import styles from "./EnemyWindow.module.scss";
import { getRandomNumber } from "../../helpers/helperFuncs";
import { Enemies } from "../../helpers/helpersArrays";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addKills, getCoin, increaseLvl } from "../../store/slices/CKPSlice";
export const EnemyWindow = () => {
  const dispatch = useAppDispatch();
  const { Coins, Kills, Power } = useAppSelector(state => state.CKP);
  const [hp, setHp] = useState(9);
  const [maxHp, setMaxHp] = useState(9);
  const [size, setSize] = useState(200);
  const [enemyId, setEnemyId] = useState(0);

  const kick = () => {
    setHp(prev => {
      if (prev > Power) return prev - Power;
      else {
        dispatch(addKills(1));
        const newHp = getRandomNumber(5, 16);
        setMaxHp(newHp);
        setSize(getRandomNumber(130, 350));
        setEnemyId(getRandomNumber(0, Enemies.length - 1));
        dispatch(getCoin(getRandomNumber(0, 10)));
        if (Kills % 100 === 0 && Kills !== 0) dispatch(increaseLvl(1));
        return newHp;
      }
    });
  };

  return (
    <div className={styles.EnemyWindow}>
      <Enemy url={Enemies[enemyId]} size={size} />
      <div className={styles.HPbarWrapper}>
        <HPbar value={hp} max={maxHp} />
        <p>Kills: {Kills}</p>
        <p>Coins: {Coins}</p>
      </div>
      <button onClick={kick} className={styles.KickButton}>
        Kick!
      </button>
    </div>
  );
};
