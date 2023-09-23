import './SecondBanner.css'

// eslint-disable-next-line react/prop-types
const SecondBanner = ({children}) => {

  return (
    <div className='secondBanner flex justify-center items-center text-2xl font-bold'>
      <h2>{children}</h2>
    </div>
  )
}

export default SecondBanner
