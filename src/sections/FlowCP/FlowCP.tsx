import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import { motion } from 'framer-motion'
import styles from './FlowCP.module.css'

const flowSteps = [
  {
    number: '1',
    title: 'Подключение пользователя к Wi-Fi',
    description: 'Пользователь подключается к точке доступа Wi-Fi'
  },
  {
    number: '2',
    title: 'Открытие страницы подтверждения',
    description: 'Автоматически открывается Captive Portal для идентификации'
  },
  {
    number: '3',
    title: 'Ввод номера телефона',
    description: 'Пользователь вводит свой номер телефона в форму'
  },
  {
    number: '4',
    title: 'Подтверждение через пропущенный звонок',
    description: 'Система отправляет пропущенный звонок для верификации'
  },
  {
    number: '5',
    title: 'Проверка системой',
    description: 'Система проверяет подтверждение номера через интеграцию Plusofon'
  },
  {
    number: '6',
    title: 'Предоставление доступа',
    description: 'После успешной проверки предоставляется доступ в интернет'
  }
]

const FlowCP = () => {
  return (
    <SectionWrapper id="flow" className={styles.flow}>
      <h2 className={styles.sectionTitle}>Логика работы сервиса</h2>
      <div className={styles.steps}>
        {flowSteps.map((step, index) => (
          <motion.div
            key={index}
            className={styles.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className={styles.stepNumber}>{step.number}</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default FlowCP

