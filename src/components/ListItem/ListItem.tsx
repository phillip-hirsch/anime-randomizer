interface ListItemProps {
  image?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
  title?: string
  content?: string | number
}

export const ListItem = ({ image, title, content }: ListItemProps) => (
  <>
    {image && <img {...image} />}
    {title && <strong>{title}: </strong>}
    {content && content}
  </>
)
