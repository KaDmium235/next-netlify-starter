import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/bg_main.JPG" alt="Netlify Logo" className={styles.logo} /> for you /*logo */
      </footer>
    </>
  )
}
