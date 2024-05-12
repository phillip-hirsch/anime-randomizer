import styles from './styles.module.css'

interface ListProps {
  items: { id: string; content: React.ReactNode }[]
}

export const List = ({ items }: ListProps) => (
  <ul className={styles.listContainer} role="list">
    {items.map((item) => (
      <li className={styles.listItem} key={item.id} role="listitem">
        {item.content}
      </li>
    ))}
  </ul>
)
