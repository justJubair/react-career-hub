

// eslint-disable-next-line react/prop-types
const CategoryHeading = ({children}) => {
  return (
    <div className="text-center mt-20 mb-6">
      <h2 className="text-4xl font-semibold">{children}</h2>
      <p className="text-gray-500 mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, dicta?</p>
    </div>
  )
}

export default CategoryHeading
