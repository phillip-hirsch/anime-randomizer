import wheelSpin from '../../assets/images/wheel.gif'
import styles from './styles.module.css'

/**
 * Displays the loading screen spinning wheel gif
 */
export const Loading = () => (
  <main className={styles.loadingMain}>
    <div>
      <img className={styles.loadingGif} src={wheelSpin} alt="loading..." />
    </div>
  </main>
)
