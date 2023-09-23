/* eslint-disable no-unused-vars */

import { Link, useNavigate } from "react-router-dom"
import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";


// eslint-disable-next-line react/prop-types
const Job = ({job}) => {
    // eslint-disable-next-line react/prop-types
    const {id, logo, job_title, company_name, location, job_type, salary, remote_or_onsite} = job
   
  
    
  return (
    <div className="card card-compact bg-base-100 border pt-4">
    <figure><img src={logo} alt={company_name} /></figure>
    <div className="card-body">
      <h2 className="card-title">{job_title}</h2>
      
      <h3 className="text-lg">{company_name}</h3>
    
      <div>
        <button className="btn mr-4 text-[#9873FF] border-[#9873FF] bg-white">{remote_or_onsite}</button>
        <button className="btn text-[#9873FF] border-[#9873FF] bg-white" >{job_type}</button>
      </div>
      <div className="flex text-slate-600 gap-4 my-2">
        <div className="flex gap-2">
          <span className="text-xl"><FaMapMarkerAlt/></span>
          <p>{location}</p>
        </div>
        <div className="flex gap-2">
          <span className="text-xl"><FaDollarSign/></span>
          <p>{salary}</p>
        </div>
      </div>
      <div className="card-actions">
      
      <Link to={`/jobDetails/${id}`} state={job_title}>
      <button  className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button></Link>
      </div>
    </div>
  </div>
  )
}

export default Job
