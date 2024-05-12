import styles from './styles.module.css'

interface HomeProps {
  title?: string
}

/**
 * Displays the home page title
 */
export const Home = ({ title = 'Anime Randomizer' }: HomeProps) => (
  <main>
    <h1>
      <strong className={styles.home}>{title}</strong>
    </h1>
  </main>
)
