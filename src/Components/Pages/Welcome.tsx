import { Link } from "react-router-dom"
import styles from './Welcome.module.scss'
export const Welcome = () =>{
    return <div className={styles.Welcome}>
        <p className={styles.title}>Привет, это игра-кликер с бюджетом в три банки пива</p>
        <Link className={styles.regButton} to={'/registration'}>Регай</Link>
    </div>
}