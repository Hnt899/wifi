import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import { motion } from 'framer-motion'
import styles from './ValueCP.module.css'

const valueItems = [
  {
    title: 'Идентификация пользователей перед доступом к Wi-Fi',
    description: 'Подтверждение номера телефона пользователей перед предоставлением доступа в интернет в соответствии с требованиями для публичных Wi-Fi сетей.'
  },
  {
    title: 'Защита владельца точки доступа',
    description: 'Фиксация факта идентификации пользователей снижает риски для владельца Wi-Fi при проверках и спорных ситуациях.'
  },
  {
    title: 'Полный учёт и контроль подключений',
    description: 'Отслеживание всех подключений к сети с сохранением информации о сессиях, времени доступа и устройствах.'
  },
  {
    title: 'Личный кабинет для управления Wi-Fi точками',
    description: 'Единая панель управления для добавления, настройки и контроля всех точек доступа из одного интерфейса.'
  },
  {
    title: 'История сессий и базовая аналитика',
    description: 'Просмотр истории подключений, количества пользователей и активности Wi-Fi сети за выбранный период.'
  },
  {
    title: 'Основа для масштабирования и развития сервиса',
    description: 'Готовая архитектура для последующего внедрения тарифов, биллинга, отчётов и дополнительных интеграций.'
  }
]

const ValueCP = () => {
  return (
    <SectionWrapper id="value" className={styles.value}>
      <h2 className={styles.sectionTitle}>Что получит заказчик</h2>
      <div className={styles.grid}>
        {valueItems.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default ValueCP

