let className2 = 'bg-blue-400 text-whitetransform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'

const Button = ({title , isResponsive ,click}) => {
  return (
      <button className={isResponsive ? 'hidden': className2 } onClick={click}>{title}</button>
  )
}

export default Button;
