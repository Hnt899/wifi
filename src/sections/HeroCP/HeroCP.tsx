import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import { motion } from 'framer-motion'
import styles from './HeroCP.module.css'

const HeroCP = () => {
  const handleContact = () => {
    window.open('https://t.me/CDI_Agency', '_blank')
  }

  return (
    <SectionWrapper className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>WiFi Verify</h1>
        <h2 className={styles.subtitle}>
          Коммерческое предложение на разработку сервиса идентификации пользователей публичного Wi-Fi
        </h2>
        <p className={styles.description}>
          Решение для безопасной идентификации пользователей публичного Wi-Fi через подтверждение номера телефона. 
          Современный сервис с удобной панелью управления и полным контролем подключений.
        </p>
        <button className={styles.ctaButton} onClick={handleContact}>
          Связаться
        </button>
      </motion.div>
    </SectionWrapper>
  )
}

export default HeroCP

