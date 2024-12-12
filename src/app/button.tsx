

const Button = (props:any) => {
  return (
      <div>
        <div className='flex justify-center items-center h-14'>
        <button className={`bg-green-400 px-4 py-2 rounded-lg ${props.className}`}>
          {props.bTn}
         
        </button>
        
        </div>
    </div>
  )
}

export default Button