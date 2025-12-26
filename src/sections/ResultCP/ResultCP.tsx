import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import { motion } from 'framer-motion'
import styles from './ResultCP.module.css'

const includedItems = [
  'Готовый сервис идентификации пользователей Wi-Fi',
  'Captive Portal с формой идентификации по номеру телефона',
  'Личный кабинет для управления Wi-Fi сетью',
  'Административная панель с полным функционалом',
  'Полный исходный код проекта'
]

const ResultCP = () => {
  return (
    <SectionWrapper id="price" className={styles.result}>
      <h2 className={styles.sectionTitle}>Стоимость проекта</h2>
      <motion.div
        className={styles.priceBlock}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.priceAmount}>350 000 ₽</div>
        <p className={styles.priceDescription}>В стоимость включено:</p>
      </motion.div>
      <div className={styles.resultsList}>
        {includedItems.map((item, index) => (
          <motion.div
            key={index}
            className={styles.resultItem}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className={styles.checkmark}>✓</div>
            <span className={styles.resultText}>{item}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default ResultCP

