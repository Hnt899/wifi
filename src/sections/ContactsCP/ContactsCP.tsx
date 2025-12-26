import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import { motion } from 'framer-motion'
import styles from './ContactsCP.module.css'

const contacts = [
  {
    icon: '📞',
    label: 'Телефон',
    value: '+7 985 365 62 94',
    link: 'tel:+79853656294'
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'demyanovcdi@mail.ru',
    link: 'mailto:demyanovcdi@mail.ru'
  },
  {
    icon: '💬',
    label: 'Telegram',
    value: '@CDI_Agency',
    link: 'https://t.me/CDI_Agency',
    isExternal: true
  }
]

const ContactsCP = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/CDI_Agency', '_blank')
  }

  return (
    <SectionWrapper id="contacts" className={styles.contacts}>
      <h2 className={styles.sectionTitle}>Контакты для связи</h2>
      <div className={styles.contactsList}>
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            className={styles.contactItem}
            target={contact.isExternal ? '_blank' : undefined}
            rel={contact.isExternal ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className={styles.icon}>{contact.icon}</span>
            <div className={styles.contactContent}>
              <span className={styles.label}>{contact.label}</span>
              <span className={styles.value}>{contact.value}</span>
            </div>
          </motion.a>
        ))}
      </div>
      <motion.button
        className={styles.telegramButton}
        onClick={handleTelegramClick}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Написать в Telegram
      </motion.button>
    </SectionWrapper>
  )
}

export default ContactsCP

