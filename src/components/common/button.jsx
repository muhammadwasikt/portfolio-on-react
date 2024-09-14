let className2 = 'bg-gradient-to-r from-pink-500 to-yellow-500 text-whitetransform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
let className1 = 'bg-gradient-to-r from-green-400 to-blue-500 text-whitetransform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'

const Button = ({title , isClassName ,isResponsive ,click}) => {
  return (
      <button className={isClassName ? className2 : isResponsive ? 'hidden' : className1} onClick={click}>{title}</button>
  )
}

export default Button;
