import styles from './styles.module.css'

interface ErrorProps {
  message?: string
}

/**
 * Displays the Error page
 */
export const Error = ({ message = 'Please Try Again' }: ErrorProps) => (
  <main>
    <h1>
      <strong className={styles.error}>Error: {message}</strong>
    </h1>
  </main>
)
