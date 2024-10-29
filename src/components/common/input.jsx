

const Input = ({types , placeholders}) => {
  return (
      <input
                type={types}
                placeholder={placeholders}
                className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-blue-400'required/>
  )
}

export default Input
