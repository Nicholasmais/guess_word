import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.title}>
        <p className={styles.name}>GuessWord</p>
      </div>
  )
}

export default Header