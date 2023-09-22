import { useEffect, useState } from "react"
import Job from "../Job/Job";



const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    const handleShowAll = ()=>{
      
    }
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-24">
        {jobs.map(job=> <Job key={job.id} job={job}/>)}
      </div>
      <button onClick={handleShowAll} className="btn-primary btn">show all</button>
    </div>
  )
}

export default FeaturedJobs
