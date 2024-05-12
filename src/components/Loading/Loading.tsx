import wheelSpin from '../../assets/images/wheel.gif'
import styles from './styles.module.css'

/**
 * Displays the loading screen spinning wheel gif
 */
export const Loading = () => (
  <main className={styles.loadingMain}>
    <img
      className={styles.loadingGif}
      src={wheelSpin}
      alt="Spinning wheel indicating loading"
    />
  </main>
)
