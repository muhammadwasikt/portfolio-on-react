
const Card = ({name , email , description}) => {
  return (
    <div className="w-[100%] m-2 my-1 p-2 border">
        <p className="w-[100%]"><span className="text-lg font-semibold max-w-[200px] w-[100%]">Name:</span> {name}</p> 
        <p className="w-[100%]"><span className="text-lg font-semibold max-w-[200px] w-[100%]">Email:</span> {email}</p> 
        <p className="w-[100%]"><span className="text-lg font-semibold max-w-[200px] w-[100%]">Message:</span> {description}</p> 
    </div>
  )
}

export default Card
