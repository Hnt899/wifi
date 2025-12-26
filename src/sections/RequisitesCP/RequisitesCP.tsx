import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import { motion } from 'framer-motion'
import styles from './RequisitesCP.module.css'

const requisites = [
  { label: 'ИП', value: 'Демьянова Елена Николаевна' },
  { label: 'ИНН', value: '310263445438' },
  { label: 'ОГРНИП', value: '325310000001892' },
  { label: 'Р/с', value: '40802810800007744407' },
  { label: 'Банк', value: 'АО «ТБанк»' },
  { label: 'БИК', value: '044525974' },
  { label: 'Корр. счёт', value: '30101810145250000974' },
  { label: 'Адрес', value: 'Белгородская обл., с. Черемошное, ул. Нагорная, д. 55' }
]

const RequisitesCP = () => {
  return (
    <SectionWrapper id="requisites" className={styles.requisites}>
      <h2 className={styles.sectionTitle}>Реквизиты исполнителя</h2>
      <motion.div
        className={styles.requisitesTable}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {requisites.map((req, index) => (
          <div key={index} className={styles.requisiteRow}>
            <div className={styles.requisiteLabel}>{req.label}</div>
            <div className={styles.requisiteValue}>{req.value}</div>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}

export default RequisitesCP

