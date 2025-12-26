import { motion } from 'framer-motion'
import styles from './Header.module.css'

const Header = () => {
  const handleContact = () => {
    window.open('https://t.me/CDI_Agency', '_blank')
  }

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <div className={styles.logo}>WiFi Verify</div>
        <button className={styles.ctaButton} onClick={handleContact}>
          Связаться
        </button>
      </div>
    </motion.header>
  )
}

export default Header

