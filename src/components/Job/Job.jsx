/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const Job = ({job}) => {
    // eslint-disable-next-line react/prop-types
    const {id, logo, job_title, company_name, location, job_type, salary, job_description} = job
    const navigate = useNavigate();
    const handleDetails =()=>{
        navigate(`/jobDetails/${id}`)
       
    }
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure><img src={logo} alt={company_name} /></figure>
    <div className="card-body">
      <h2 className="card-title">{job_title}</h2>
      <h3 className="text-lg">{company_name}</h3>
      <p>{job_description}</p>
      <div className="card-actions">
        <button onClick={handleDetails} className="btn btn-primary">View Details</button>
      </div>
    </div>
  </div>
  )
}

export default Job
