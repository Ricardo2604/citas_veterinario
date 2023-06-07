const Error = ({children}) => {
  return (
  <div>
    <p 
    className='bg-red-800 text-white rounded-md font-black text-center mb-3'>
        {children}
    </p>
   </div>
  )
}

export default Error
