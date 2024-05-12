interface ButtonProps {
  onClick?: () => void
  disabled?: boolean
}

export const Button = ({ onClick, disabled }: ButtonProps) => (
  <button onClick={onClick} disabled={disabled}>
    Random
  </button>
)
