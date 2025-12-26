import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import { motion } from 'framer-motion'
import styles from './ResultCP.module.css'

const results = [
  'Рабочий сервис идентификации Wi-Fi',
  'Captive Portal для пользователей',
  'Панель управления клиента',
  'Административный доступ',
  'Исходный код проекта'
]

const ResultCP = () => {
  return (
    <SectionWrapper id="result" className={styles.result}>
      <h2 className={styles.sectionTitle}>Результат работы</h2>
      <div className={styles.resultsList}>
        {results.map((result, index) => (
          <motion.div
            key={index}
            className={styles.resultItem}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className={styles.checkmark}>✓</div>
            <span className={styles.resultText}>{result}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default ResultCP

