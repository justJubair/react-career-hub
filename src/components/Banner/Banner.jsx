import img from '../../assets/user.png'

const Banner = () => {
  return (
    <div className="hero ">
    <div className="hero-content p-0 flex-col lg:flex-row-reverse">
      <img src={img} className="max-w-sm rounded-lg" />
      <div>
        <h1 className="text-5xl leading-tight font-bold">One Step <br /> Closer To Your <br /> <span>Dream Job</span></h1>
        <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  )
}

export default Banner
