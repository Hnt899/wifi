import SectionWrapper from '../../components/SectionWrapper/SectionWrapper'
import { motion } from 'framer-motion'
import styles from './TechCP.module.css'

const techCategories = [
  {
    category: 'Backend',
    items: [
      'Python (FastAPI / Django)',
      'PostgreSQL',
      'REST API'
    ]
  },
  {
    category: 'Frontend',
    items: [
      'React',
      'TypeScript',
      'SPA'
    ]
  },
  {
    category: 'Инфраструктура',
    items: [
      'Docker',
      'Nginx',
      'Ubuntu 22.04',
      'HTTPS'
    ]
  },
 
]

const TechCP = () => {
  return (
    <SectionWrapper id="tech" className={styles.tech}>
      <h2 className={styles.sectionTitle}>Технологии и реализация</h2>
      <div className={styles.grid}>
        {techCategories.map((category, index) => (
          <motion.div
            key={index}
            className={styles.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            <ul className={styles.techList}>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className={styles.techItem}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default TechCP

