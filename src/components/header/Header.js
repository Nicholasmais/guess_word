import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.title}>
        <p className={styles.name}>Guessword</p>
      </div>
  )
}

export default Header