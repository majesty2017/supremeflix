interface ButtonProps {
    text: string,
    type?: string,
    bgColor?: string,
    hoverBgColor?: string,
    onClick?: any
}
const Button = ({text, type, bgColor, hoverBgColor, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`bg-red-600 py-3 rounded-md w-full mt-10 hover:bg-red-700 transition`}>{text}</button>
  )
}

export default Button