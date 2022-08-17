import styles from "./StartScreen.module.scss";
const StartScreen = ({startGame}) => {
    return (
        <div className={styles.divBtn}>   
            <button className={styles.btn} 
            onClick={startGame}
            >Começar</button>        
        </div>
    )
}

export default StartScreen;