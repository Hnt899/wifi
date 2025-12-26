import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import { motion } from 'framer-motion'
import styles from './StagesCP.module.css'

const stages = [
  {
    title: 'Инфраструктура и размещение',
    duration: '3–4 дня',
    description: 'Настройка серверной инфраструктуры, развёртывание Docker-контейнеров, настройка Nginx'
  },
  {
    title: 'Captive Portal',
    duration: '5–6 дней',
    description: 'Разработка интерфейса для идентификации пользователей с формой ввода телефона'
  },
  {
    title: 'Backend и API',
    duration: '7–8 дней',
    description: 'Разработка серверной части на Python, настройка базы данных PostgreSQL, создание REST API'
  },
  {
    title: 'Интеграция Plusofon',
    duration: '4–5 дней',
    description: 'Интеграция сервиса flash-call для подтверждения номеров телефонов'
  },
  {
    title: 'Панель управления',
    duration: '7–8 дней',
    description: 'Разработка административной панели для управления точками доступа и просмотра статистики'
  },
  {
    title: 'Финальное тестирование и запуск',
    duration: '3–4 дня',
    description: 'Комплексное тестирование всех компонентов системы и подготовка к запуску'
  }
]

const totalDuration = 'до 30 календарных дней'

const StagesCP = () => {
  return (
    <SectionWrapper id="stages" className={styles.stages}>
      <h2 className={styles.sectionTitle}>Этапы реализации проекта</h2>
      <div className={styles.timeline}>
        {stages.map((stage, index) => (
          <motion.div
            key={index}
            className={styles.stage}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className={styles.stageHeader}>
              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <span className={styles.stageDuration}>{stage.duration}</span>
            </div>
            <p className={styles.stageDescription}>{stage.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className={styles.total}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <strong>Общий срок: {totalDuration}</strong>
      </motion.div>
    </SectionWrapper>
  )
}

export default StagesCP

