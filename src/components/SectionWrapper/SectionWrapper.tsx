import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import styles from './SectionWrapper.module.css'

interface SectionWrapperProps {
  children: ReactNode
  id?: string
  className?: string
}

const SectionWrapper = ({ children, id, className = '' }: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      className={`${styles.section} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        {children}
      </div>
    </motion.section>
  )
}

export default SectionWrapper

