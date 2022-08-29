import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.title}>
        <div className={styles.name}>GuessWord</div>
      </div>
  )
}

export default Header